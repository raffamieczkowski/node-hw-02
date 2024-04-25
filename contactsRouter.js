// const express = require('express');
// const Contact = require('../../contactModel');
// const mongoose = require('mongoose');

// const router = express.Router();

// router.get('/:contactId', async (req, res) => {
//     try {
//       const contact = await Contact.findById(mongoose.Types.ObjectId(req.params.contactId));
//       if (contact) {
//         res.json(contact);
//       } else {
//         res.status(404).json({ message: "Contact not found" });
//       }
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

// router.post('/', async (req, res) => {
//   const contact = new Contact(req.body);

//   try {
//     const newContact = await contact.save();
//     res.status(201).json(newContact);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// router.delete('/:contactId', async (req, res) => {
//   try {
//     await Contact.findByIdAndDelete(req.params.contactId);
//     res.json({ message: "Contact deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// router.put('/:contactId', async (req, res) => {
//   try {
//     const updatedContact = await Contact.findByIdAndUpdate(
//       req.params.contactId,
//       req.body,
//       { new: true }
//     );
//     res.json(updatedContact);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// router.patch('/:contactId/favorite', async (req, res) => {
//   const { contactId } = req.params;
//   const { favorite } = req.body;

//   if (favorite === undefined) {
//     return res.status(400).json({ message: "Missing field favorite" });
//   }

//   try {
//     const updatedContact = await Contact.findByIdAndUpdate(
//       contactId,
//       { favorite },
//       { new: true }
//     );

//     if (!updatedContact) {
//       return res.status(404).json({ message: "Contact not found" });
//     }

//     res.json(updatedContact);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;
