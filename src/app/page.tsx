import { BikeForm } from '@/components/Form';

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r py-12">
            <div className="px-6 text-center md:px-12">
                <h1 className="mb-6 text-4xl font-bold text-blue-500 md:text-5xl">
                    Bike Theft Prediction in Toronto
                </h1>
                <p className="mb-6 text-lg leading-relaxed md:text-xl">
                    Our app uses historical data and machine learning to predict the likelihood of
                    bike thefts in different areas of Toronto. By inputting key details of your
                    bike, you can understand the risks and make informed decisions to protect it.
                </p>
                <BikeForm />
            </div>
        </div>
    );
}
