const mongoose = require('mongoose')

const ContactSubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  service: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  reply: { type: String },
  replied: { type: Boolean, default: false },
})

module.exports = mongoose.models.ContactSubmission || mongoose.model('ContactSubmission', ContactSubmissionSchema) 