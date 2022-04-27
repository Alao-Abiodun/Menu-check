import {Response, Request} from 'express';
import {IMenu} from '../../types/menus/menus.type';
import Menu from '../../models/menus/menus.model';

const getMenus = async (req: Request, res: Response): Promise<any> => {
    try {
        // find menus with typescript using aggregate method
        const menus: IMenu[] = await Menu.aggregate([]);
        return res.status(200).json({
            success: true,
            count: menus.length,
            data: menus
        });
    } catch (error: any) {
        throw error;
    }
}

const addMenu = async (req: Request, res: Response): Promise<any> => {
    try {
        // find menus with typescript using aggregate method
        const menu: IMenu = await Menu.create(req.body);
        return res.status(201).json({
            success: true,
            data: menu
        });
    } catch (error: any) {
        throw error;
    }
}

// find menu by Id using aggregate
const fetchAMenu = async (req: Request, res: Response): Promise<any> => {
    try {
        const menu: IMenu | null = await Menu.findById(req.params.id);
        return res.status( menu ? 200 : 404).json({
            success: true,
            data: menu
        });
    } catch (error: any) {
        throw error;
    }
}

// update menu by id using aggregate function
const updateMenu = async (req: Request, res: Response): Promise<any> => {
    try {
        const menu: IMenu | null = await Menu.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.status( menu ? 200 : 404).json({
            success: true,
            data: menu
        });
    } catch (error: any) {
        throw error;
    }
}








