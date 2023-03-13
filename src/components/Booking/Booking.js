import React, { useEffect } from 'react'

const Booking = () => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            // 👇️ redirects to an external URL
            window.location.replace('https://www.hosteeva.com/properties/available/details/12926-hosteeva-oceanfront-sunny-condo-w-pool-in-atlantica-towers-condo');
        }, 500);
    
        return () => clearTimeout(timeout);
    }, []);
    
    return (
        <section>
            Please Wait While We Redirect You to Our Booking Host.
        </section>
    )
}
export default Booking;