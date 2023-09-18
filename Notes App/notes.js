import chalk from "chalk";
import fs from "fs";
import { title } from "process";
import yargs from "yargs";

export const getNotes = () => {
  return "Your notes...";
};

export const addNote = (title, body) => {
  const notes = loadNotes();
  if (notes.some((note) => note.title === title && note.body === body)) return;

  notes.push({
    title: title,
    body: body,
  });

  saveNotes(notes);
};

export const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const jsonData = dataBuffer.toString();
    return JSON.parse(jsonData);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const jsonData = JSON.stringify(notes);
  fs.writeFileSync("notes.json", jsonData);
};

export const removeNote = (title) => {
  const notes = loadNotes();
  const index = notes.findIndex((note) => note.title === title);
  if (index === -1) return;
  notes.splice(index, 1);
  saveNotes(notes);
};

export const listNotes = () => {
  const notes = loadNotes();
  notes.map((note) => {
    console.log(chalk.blue(note.title));
  });
};

export const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (!note) return;
  console.log(note.title + " " + note.body);
};
