import {getEndedAucitons} from "../lib/getEndedAuctions";

async function processAuctions(event,contex){
    const auctionsToClose = await getEndedAucitons();
    console.log(auctionsToClose);
}

export const handler = processAuctions;