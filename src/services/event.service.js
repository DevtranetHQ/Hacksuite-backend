const Event = require("./../models/event.model");
const CustomError = require("./../utils/custom-error");

class EventService {
    async create(data) {
        return await new Event(data).save();
    }

    async getAll() {
        return await Event.find({});
    }

    async getOne(eventId) {
        const event = await Event.findOne({ _id: eventId });
        if (!event) throw new CustomError("Event does not exists");

        return event;
    }

    async update(eventId, data) {
        const event = await Event.findByIdAndUpdate(
            { _id: eventId },
            { $set: data },
            { new: true }
        );

        if (!event) throw new CustomError("Event dosen't exist", 404);

        return event;
    }

    async delete(eventId) {
        const event = await Event.findOne({ _id: eventId });
        event.remove();
        return event;
    }
}

module.exports = new EventService();
