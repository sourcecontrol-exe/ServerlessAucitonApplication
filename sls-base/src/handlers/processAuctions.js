import {getEndedAucitons} from "../lib/getEndedAuctions";
import {closeAuction} from "../lib/closeAuction";
import createError from 'http-errors';

async function processAuctions(event,contex){
     try{
         const auctionsToClose = await getEndedAucitons();
        const closePromises = auctionsToClose.map(auction => closeAuction(auction));
        await Promise.all(closePromises);
        return { closed : closePromises.length };
    }
    catch(error){
        console.error(error);
        throw new createError.InternalServerError(error);
    };
};

export const handler = processAuctions;