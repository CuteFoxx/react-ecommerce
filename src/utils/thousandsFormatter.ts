export default function thousandsFormatter(x:string|number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}