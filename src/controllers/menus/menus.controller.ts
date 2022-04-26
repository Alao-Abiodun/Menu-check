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

