export const calculateTimeToEvent = (date: string) => {
     //EXAMPLE = "2024-2-04T09:00:00-09:00"
     const eventDate = new Date(2024, 3, 10, 9, 0);
     const currentDate = new Date();

     const timeRemaining = eventDate.getTime() - currentDate.getTime()

     //Calculate days, hours, minutes, and secounds
     const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
     const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((timeRemaining % (100 * 60 * 60)) / (1000 * 60));
     const secounds = Math.floor((timeRemaining % (1000 * 60 )) / 1000);

     return {days, hours, minutes, secounds}
}