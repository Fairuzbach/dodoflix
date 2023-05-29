import { Button } from "flowbite-react"
const ButtonComponent = (props) => {
    return <Button onClick={() => { props.buttonClicked() }} className="mx-auto">{props.btnName}</Button>
}
export default ButtonComponent