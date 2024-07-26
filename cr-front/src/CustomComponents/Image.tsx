export function Image({src, width, height, draggable=false, alt}:{
    src: string,
    width?: number,
    height?: number,
    draggable?:boolean,
    alt: string
}){

    return <img src={src} width={width} height={height} draggable={draggable} alt={alt}/>

}

export default Image