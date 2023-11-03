import { scanDuplicates } from "/js/scanDuplicates.js"
import { scanWebsites } from "/js/scanWebsites.js"
import { extensionMessageSender } from "../js/extensionMessageSender.js";
extensionMessageSender("scanWebsites", scanWebsites); // Runs the "scanWebsites" script in the background
