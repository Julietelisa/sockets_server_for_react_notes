import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
  prev: Object,
  isEditing: Boolean,
  date: Date,


}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

// create model class
const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
