import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const athletes = [
    {
        id: 1,
        name: "Dylan Cook",
        school: "Morehead State",
        sport: "Football",
        image: "dylanAction.PNG", //working on photo
        collegeLogo: "morehead2.PNG", //working on logo
        position: "Defensive Back",
        number: 12,
        accolades: "Arizona 1st Team All-State",
        bio: "Dylan Cook, a standout college athlete from Tucson, Arizona, has risen from first team All-Arizona honors at Ironwood Ridge High to starting safety at Morehead State."
    }
];

const Nil = () => {
    const navigate = useNavigate();
    return (
    <section id="nil-section" className="relative">
        {/* Wrapper div to hold bg image */}
            <div className="relative min-h-screen">
                {/* Background image div */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('modernLogo.PNG')",
                        opacity: 0.15,
                        pointerEvents: 'none',
                        zIndex: 0,            
                    }}
                   
                /> 
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12 pt-24">
            {/*buttons up top*/}
                <div className="flex justify-between items-center px-6 mb-6">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-red-600 hover:bg-red-700 text-white font-bebas py-2 px-4 rounded-lg shadow transition"
                    >
                        ← Back to Home
                    </button>
                    <button
                        onClick={() => navigate('/shop')} 
                        className="text-black hover:text-red-600 transition text-xl"
                        aria-label="Go to Shop"
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            <h1 className="text-4xl font-bebas text-black text-center mb-10">Our Athletes</h1>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
                {athletes.map((athlete) => (
                    <div key={athlete.id} className="perspective w-64 h-96 mx-auto">
                        <div className="card-flip w-full h-full">
                            <div className="card-front bg-black border-4 border-red-600 shadow-lg">
                                <img
                                    src={athlete.image}
                                    alt={athlete.name}
                                    className="absolute w-full h-full object-cover"
                                />
                                <img
                                    src={athlete.collegeLogo}
                                    alt={`${athlete.school} logo`}
                                    className="absolute top-3 left-3 w-10 h-10 z-10"
                                />
                                <div className="absolute bottom-3 right-3 text-white text-sm font-bebas drop-shadow-lg z-10">
                                    {athlete.name.split(" ")[0] + ' ' + athlete.name.split(" ")[1]}
                                </div>
                            </div>
                            <div className="card-back bg-white border-4 border-red-600 shadow-lg flex flex-col justify-between items-center px-4 pt-8 pb-6 h-full">
                                <div className="text-xl font-bebas mb-4">{athlete.name}</div>
                                <div className="flex flex-col w-full items-start gap-2">
                                    <div>
                                        <span className="font-semibold text-red-600 text-xs">School:</span>
                                        <span className="ml-2 text-gray-700 text-xs font-anton">{athlete.school}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-red-600 text-xs">Sport:</span>
                                        <span className="ml-2 text-gray-700 text-xs font-anton">{athlete.sport}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-red-600 text-xs">Position:</span>
                                        <span className="ml-2 text-gray-700 text-xs font-anton">{athlete.position}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-red-600 text-xs">Number:</span>
                                        <span className="ml-2 text-gray-700 text-xs font-anton">#{athlete.number}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-red-600 text-xs">Accolades:</span>
                                        <span className="ml-2 text-gray-700 text-xs font-anton">{athlete.accolades}</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-red-600 text-xs">Bio:</span>
                                        <span className="ml-2 text-gray-600 text-xs leading-tight break-words">{athlete.bio}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                ))}
                
            </div>
            
        </div>
    </div>
    </section>
    );
};
export default Nil;