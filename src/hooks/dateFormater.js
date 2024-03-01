
export default function dateFormater(data) {
    const daysWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const dayWeek = daysWeek[data.getDay()];
    const day = String(data.getDate()).padStart(2, '0');
    const mounth = String(data.getMonth() + 1).padStart(2, '0');
    const year = data.getFullYear();
    const hour = String(data.getHours()).padStart(2, '0');
    const minut = String(data.getMinutes()).padStart(2, '0');
    const secound = String(data.getSeconds()).padStart(2, '0');

    return `${dayWeek}, ${day}/${mounth}/${year}, ${hour}:${minut}:${secound}`;
}