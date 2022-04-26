import {IMenu} from '../../types/menus/menus.type';
import { model, Schema} from 'mongoose';

const menuSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
}
);

export default model<IMenu>('Menu', menuSchema);