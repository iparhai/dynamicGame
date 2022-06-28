const instruments = ["Octagon", 'Parallelogram', 'Rhombus', 'Trapezoid','Triangle',"Pentagon"]
const generate = () => {
    const instrument = instruments[parseInt(Math.random() * instruments.length)]
    const question = "Find " + instrument;
    return { question, instrument }
}
export default {
    generate
}