import { nanoid } from "nanoid";
import { notes } from "./notes";

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {
        title, tags, body, id, createdAt, updatedAt,
    }

    notes.push(newNote);

    const ISuccess = notes.filter((note) => note.id === id).length > 0;

    if (ISuccess){
        const response = h.response({
            status: "success",
            message: "Notes added.",
            data: {
                noteId : id
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: "failed",
        message: "Add notes failed.",
        data: {
            noteId : id
        },
    });
    response.code(500);
    return response;
};

export default { addNoteHandler };
