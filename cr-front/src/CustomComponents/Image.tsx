export function Image({src, width, height, draggable=false, className, alt}:{
    src: string,
    width?: number,
    height?: number,
    draggable?:boolean,
    className?:string
    alt: string
}){

    return <img src={src} className={className} width={width} height={height} draggable={draggable} alt={alt}/>

}

export default Image