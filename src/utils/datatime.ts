export const formatDate = (date: Date, separator: string = "/" || "-") => {
    let day = date.getDate().toString().padStart(2, "0");
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let year = date.getFullYear();
  
    let fullDate = [day, month, year].join(separator);
    return fullDate;
  };
  export const formatTime = (time: Date) => {
    let hours = time.getHours().toString().padStart(2, "0");
    let mins = time.getMinutes().toString().padStart(2, "0");
  
    let fullTime = [hours, mins].join(":");
    return fullTime;
  };
  export const formatFullTime = (time: Date) => {
    let hours = time.getHours().toString().padStart(2, "0");
    let mins = time.getMinutes().toString().padStart(2, "0");
    let secs = time.getSeconds().toString().padStart(2, "0");
  
    let fullTime = [hours, mins, secs].join(":");
    return fullTime;
  };
export function getWeekNumber(date: Date) {
    const d: any = new Date(date);
    d.setDate(d.getDate() - d.getDay());
    const yearStart: any = new Date(d.getFullYear(), 0, 1);
    const daysSinceYearStart: any = Math.floor(
      (d - yearStart) / (24 * 60 * 60 * 1000)
    );
    const weekNumber = Math.ceil((daysSinceYearStart + 1) / 7);
    return weekNumber;
  }
  