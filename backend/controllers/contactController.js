export const submitContact = async (res, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'all fields required' });
        }

        const contact = {
            name,
            email,
            message,
            createdAt: new Date()
        };

        await req.db.collection('contacts').insertOne(contact);
        res.status(201).json({ message: 'Contact submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit contact' });
    }
};

export const getContacts = async (req, res) => {
    try {
        const contacts = await req.db.collection('contacts').find().toArray();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch contacts' });
    }
};