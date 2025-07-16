import Button from "@/components/Button";
import Card from "@/components/Card";

const  Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <div className="space-x-4 mx-3">
                <Button title="small" styles="text-sm rounded-sm"/>
                <Button title="medium" styles="text-base rounded-md"/>
                <Button title="large" styles="text-lg rounded-full"/>
            </div>
        </div>
    )
}

export default Landing;