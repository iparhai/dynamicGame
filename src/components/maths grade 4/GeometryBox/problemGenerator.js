const instruments = ["Compass", 'Divider', 'Eraser', 'Pencil','Ruler',"Set square"]
const generate = () => {
    const instrument = instruments[parseInt(Math.random() * instruments.length)]
    const question = "Find " + instrument;
    return { question, instrument }
}
export default {
    generate
}