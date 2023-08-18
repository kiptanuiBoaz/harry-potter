import { format, parse } from "date-fns";


//final display format
const requiredFormat = "dd MMM yyyy";
const inputFormat = "dd-mm-yyyy"


//try all the formats for the current unfomatted date
export const formatDate = (dateString:string) => {
    
        try {
            const parsedDate = parse(dateString, inputFormat , new Date());
            return format(parsedDate, requiredFormat);
        } catch (error) {
            // Ignore parse errors for this format and continue to the next one
        }
 
    return "N/A";
};
