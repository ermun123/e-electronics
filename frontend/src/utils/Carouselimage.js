export default function Carouselimage({ path, ...props }) {
    return <img {...props} src={process.env.PUBLIC_URL + path} alt="" />;
}