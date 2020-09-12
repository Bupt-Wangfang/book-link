import { format } from 'date-fns'

export function formatDate(time, option = 'yyyy/MM/dd HH:mm'){
    const date = new Date(time);
    return format(date, option);
}