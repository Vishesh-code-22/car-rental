import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.listing.deleteMany();

    await prisma.listing.createMany({
        data: [
                {
                    id: "1",
                    name: "Ali Khan",
                    companyName: "FastTrack Rentals",
                    jobTitle: "General_Manager",
                    fleetSize: "Upto_50_Cars",
                    contactNumber: "+971-501234567",
                    email: "ali@fasttrack.com",
                    country: "UAE",
                    city: "Dubai",
                    status: "pending"
                },
                {
                    id: "2",
                    name: "Sara Al Farsi",
                    companyName: "Elite Drives",
                    jobTitle: "Marketing_Manager",
                    fleetSize: "Upto_100_Cars",
                    contactNumber: "+971-502345678",
                    email: "sara@elitedrives.com",
                    country: "UAE",
                    city: "Abu_Dhabi",
                    status: "pending"
                },
                {
                    id: "3",
                    name: "Mohammed Rafi",
                    companyName: "Speedster Co.",
                    jobTitle: "Owner_Founder",
                    fleetSize: "Cars_5_10",
                    contactNumber: "+971-503456789",
                    email: "rafi@speedster.com",
                    country: "UAE",
                    city: "Sharjah",
                    status: "pending"
                },
                {
                    id: "4",
                    name: "Fatima Noor",
                    companyName: "Zoom Auto",
                    jobTitle: "Other",
                    fleetSize: "Cars_500_plus",
                    contactNumber: "+971-504567890",
                    email: "fatima@zoomauto.ae",
                    country: "UAE",
                    city: "Dubai",
                    status: "pending"
                },
                {
                    id: "5",
                    name: "Zayed Sultan",
                    companyName: "Royal Motors",
                    jobTitle: "General_Manager",
                    fleetSize: "Upto_50_Cars",
                    contactNumber: "+971-505678901",
                    email: "zayed@royalmotors.ae",
                    country: "UAE",
                    city: "Abu_Dhabi",
                    status: "pending"
                },
                {
                    id: "6",
                    name: "Lina Al Hashmi",
                    companyName: "Velocity Fleet",
                    jobTitle: "Marketing_Manager",
                    fleetSize: "Upto_100_Cars",
                    contactNumber: "+971-506789012",
                    email: "lina@velocityfleet.com",
                    country: "UAE",
                    city: "Ajman",
                    status: "pending"
                },
                {
                    id: "7",
                    name: "Omar Yousuf",
                    companyName: "DriveLine",
                    jobTitle: "Owner_Founder",
                    fleetSize: "Cars_5_10",
                    contactNumber: "+971-507890123",
                    email: "omar@driveline.com",
                    country: "UAE",
                    city: "Sharjah",
                    status: "pending"
                },
                {
                    id: "8",
                    name: "Ayesha Rahman",
                    companyName: "CarSwift",
                    jobTitle: "General_Manager",
                    fleetSize: "Upto_50_Cars",
                    contactNumber: "+971-508901234",
                    email: "ayesha@carswift.ae",
                    country: "UAE",
                    city: "Dubai",
                    status: "pending"
                },
                {
                    id: "9",
                    name: "Hassan Al Nuaimi",
                    companyName: "MetroDrive",
                    jobTitle: "Other",
                    fleetSize: "Cars_500_plus",
                    contactNumber: "+971-509012345",
                    email: "hassan@metrodrive.com",
                    country: "UAE",
                    city: "Fujairah",
                    status: "pending"
                },
                {
                    id: "10",
                    name: "Nadia Karim",
                    companyName: "Xpress Rentals",
                    jobTitle: "Other",
                    fleetSize: "Cars_5_10",
                    contactNumber: "+971-510123456",
                    email: "nadia@xpress.ae",
                    country: "UAE",
                    city: "Dubai",
                    status: "pending"
                },
                {
                    id: "11",
                    name: "Tariq Mansoor",
                    companyName: "AutoFleet UAE",
                    jobTitle: "Sales_Manager",
                    fleetSize: "Upto_50_Cars",
                    contactNumber: "+971-511234567",
                    email: "tariq@autofleet.ae",
                    country: "UAE",
                    city: "Abu_Dhabi",
                    status: "pending"
                },
                {
                    id: "12",
                    name: "Hiba Saeed",
                    companyName: "PrimeAuto",
                    jobTitle: "Marketing_Manager",
                    fleetSize: "Upto_100_Cars",
                    contactNumber: "+971-512345678",
                    email: "hiba@primeauto.ae",
                    country: "UAE",
                    city: "Ajman",
                    status: "pending"
                },
                {
                    id: "13",
                    name: "Rami Khalid",
                    companyName: "GoFleet",
                    jobTitle: "Other",
                    fleetSize: "Cars_500_plus",
                    contactNumber: "+971-513456789",
                    email: "rami@gofleet.ae",
                    country: "UAE",
                    city: "Sharjah",
                    status: "pending"
                },
                {
                    id: "14",
                    name: "Iman Al Zahra",
                    companyName: "DriveFast",
                    jobTitle: "Owner_Founder",
                    fleetSize: "Cars_5_10",
                    contactNumber: "+971-514567890",
                    email: "iman@drivefast.com",
                    country: "UAE",
                    city: "Ras_Al_Khaimah",
                    status: "pending"
                },
                {
                    id: "15",
                    name: "Bilal Javed",
                    companyName: "Fleet360",
                    jobTitle: "General_Manager",
                    fleetSize: "Upto_50_Cars",
                    contactNumber: "+971-515678901",
                    email: "bilal@fleet360.com",
                    country: "UAE",
                    city: "Dubai",
                    status: "pending"
                },
                {
                    id: "16",
                    name: "Noura Faisal",
                    companyName: "UDrive",
                    jobTitle: "Admin_Receptionist",
                    fleetSize: "Upto_100_Cars",
                    contactNumber: "+971-516789012",
                    email: "noura@udrive.com",
                    country: "UAE",
                    city: "Umm_Al_Quwain",
                    status: "pending"
                },
                {
                    id: "17",
                    name: "Yasir Mehmood",
                    companyName: "QuickWheels",
                    jobTitle: "Sales_Manager",
                    fleetSize: "Upto_50_Cars",
                    contactNumber: "+971-517890123",
                    email: "yasir@quickwheels.ae",
                    country: "UAE",
                    city: "Fujairah",
                    status: "pending"
                },
                {
                    id: "18",
                    name: "Layla Hussein",
                    companyName: "ZoomFleet",
                    jobTitle: "Other",
                    fleetSize: "Cars_5_10",
                    contactNumber: "+971-518901234",
                    email: "layla@zoomfleet.com",
                    country: "UAE",
                    city: "Abu_Dhabi",
                    status: "pending"
                },
                {
                    id: "19",
                    name: "Khalid Hamdan",
                    companyName: "ExpressDrive",
                    jobTitle: "Sales_Manager",
                    fleetSize: "Upto_500_Cars",
                    contactNumber: "+971-519012345",
                    email: "khalid@expressdrive.ae",
                    country: "UAE",
                    city: "Dubai",
                    status: "pending"
                },
                {
                    id: "20",
                    name: "Mariam Al Shehhi",
                    companyName: "CityRide",
                    jobTitle: "Owner_Founder",
                    fleetSize: "Cars_5_10",
                    contactNumber: "+971-520123456",
                    email: "mariam@cityride.com",
                    country: "UAE",
                    city: "Ajman",
                    status: "pending"
                }
                ]


    })
    console.log("Database seeded");

}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    })