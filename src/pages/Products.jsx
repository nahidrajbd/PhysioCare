import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { productFaqs } from '../data/faq';

// Import product images
import img4ChannelTens from '../assets/Products/4-channel TENS (Transcutaneous Electrical Nerve Stimulation).jpg';
import img448khzRF from '../assets/Products/448kHz Radio Frequency (RF) Tecar Therapy machine.jpg';
import imgAcupuncturePen from '../assets/Products/Acupuncture pen.jpg';
import imgBalanceBall from '../assets/Products/Balance Ball 58cm.jpg';
import imgComfyTens from '../assets/Products/Comfy TENS Physiotherapy Machine.jpg';
import imgDigitalCervical from '../assets/Products/Digital cervical and lumbar traction machine.jpg';
import imgDumbbell1kg from '../assets/Products/Dumbbell 1kg.jpg';
import imgDumbbell3kg from '../assets/Products/Dumbbell 3 Kg.jpg';
import imgEV906 from '../assets/Products/EV-906 EMB DIGITAL TENSEMS.jpg';
import imgElectricBedSingle from '../assets/Products/Electric Physiotherapy Therapy Bed.jpg';
import imgElectricBeds from '../assets/Products/Electric physiotherapy therapy beds.jpg';
import imgElectronicAcupuncture from '../assets/Products/Electronic Acupuncture Stimulator machine.jpg';
import imgEvetorBike from '../assets/Products/Evetor EFIT-533F exercise bike.jpg';
import imgExerciseBand from '../assets/Products/Exercise Resistance Band  (Sports Band).jpg';
import imgFoldableBed from '../assets/Products/Foldable Physiotherapy Exercise Bed.jpg';
import imgFoldingPedal from '../assets/Products/Folding Pedal Exerciser.jpg';
import imgFullSpine from '../assets/Products/Full Spine  Anatomical  Model.jpg';
import imgHandJoint from '../assets/Products/Hand joint model.jpg';
import imgHydraulicStepper from '../assets/Products/Hydraulic home fitness stepper with a handle..jpg';
import imgInfraredController from '../assets/Products/Infrared Heat Lamp with Controller.jpg';
import imgInfraredStand275 from '../assets/Products/Infrared Stand 275W with Timer  & Regulator.jpg';
import imgKinesiologyTape from '../assets/Products/Kinesiology Sports Tape.jpg';
import imgKneeJoint from '../assets/Products/Knee Joint  Anatomy Model.jpg';
import imgLHCInterferential from '../assets/Products/LHC brand Digital Interferential Therapy machine.jpg';
import imgLHCTensMs from '../assets/Products/LHC-101 TENS + MS combination physiotherapy machine.jpg';
import imgManualBed from '../assets/Products/Manual Exercise Bed  (SS & MS Frame).jpg';
import imgMassageGun from '../assets/Products/Massage gun.jpg';
import imgMiniSkeleton from '../assets/Products/Mini Human Skeleton Model.jpg';
import imgMiniShockwave from '../assets/Products/Mini Shockwave Therapy Machine.jpg';
import imgMiniTens from '../assets/Products/Mini T.E.N.S. Two Channel physiotherapy machine. .jpg';
import imgMuscleStimulator from '../assets/Products/Muscle Stimulator-Dt (Model LNC-225).jpg';
import imgIRRBigStand from '../assets/Products/Non-Luminous Infrared (IRR) big stand.jpg';
import imgIRRSmall from '../assets/Products/Non-Luminous Infrared (IRR) small size.jpg';
import imgNonLuminousIRR from '../assets/Products/Non‑Luminous IRR Stand  (Infrared Therapy Stand).jpg';
import imgRehabRobotSingle from '../assets/Products/Rehabilitation Robot Glove  Single finger.jpg';
import imgRehabRobotSet from '../assets/Products/Rehabilitation Robot Glove set .jpg';
import imgRoboticHand from '../assets/Products/Robotic Hand Exercise Trainer.jpg';
import imgSonopowerDig003 from '../assets/Products/SONOPOWER-003 Digital Ultrasonic Therapy Machine.jpg';
import imgSonopowerDig004 from '../assets/Products/SONOPOWER-004 Digital Ultrasonic Therapy Machine .jpg';
import imgShockwaveMain from '../assets/Products/Shockwave Therapy Machine.jpg';
import imgShockwaveAlt from '../assets/Products/Shockwave therapy machine. jpg.jpg';
import imgShortwaveDiathermy from '../assets/Products/Shortwave Diathermy  Therapy Machine.jpg';
import imgShortwaveBulb from '../assets/Products/Shortwave Diathermy (SWD) Bulb 250 and 500Watt.jpg';
import imgShoulderJoint from '../assets/Products/Shoulder Joint Anatomy Model.jpg';
import imgShoulderJointAlt from '../assets/Products/Shoulder joint model.jpg';
import imgSonopower1mz from '../assets/Products/Sonopower therapy 1 Mz.jpg';
import imgSonopower13mz from '../assets/Products/Sonopower therapy 1 and 3 Mz.jpg';
import imgSpikyCushion from '../assets/Products/Spiky tactile balance cushion.jpg';
import imgGuaSha from '../assets/Products/Stainless Steel Gua Sha Scraping Massage Tool Set.jpg';
import imgStimpower from '../assets/Products/Stimpower.jpg';
import imgTaiwanTens from '../assets/Products/Taiwan Tens Machine EV-906.jpg';
import imgTansPinPad from '../assets/Products/Tans machine pin pad.jpg';
import imgUltrasound from '../assets/Products/Ultrasound Therapy Machine.jpg';
import imgWeightCuff from '../assets/Products/Weight Cuff (Ankle_Wrist Weight).jpg';
import imgAcupunctureNeedle from '../assets/Products/acupuncture needle.jpg';
import imgAnatomicalSkeleton from '../assets/Products/anatomical human skeleton with nerve model.jpg';
import imgAnkleJoint from '../assets/Products/ankle joint model.jpg';
import imgBallisticESWT from '../assets/Products/ballistic Extracorporeal Shock Wave Therapy (ESWT) machine.jpg';
import imgCervicalSpine from '../assets/Products/cervical spine anatomical models.jpg';
import imgDumbbell2kg from '../assets/Products/dumbbell 2 Kg.jpg';
import imgDumbbell5kg from '../assets/Products/dumbbell 5kg.jpg';
import imgHerniaDiscal from '../assets/Products/hernia discal model.jpg';
import imgInfraredLampStand from '../assets/Products/infrared heat therapy lamp with stand 275watt.jpg';
import imgLumbarSpine from '../assets/Products/lumbar spine anatomy mode.jpg';
import imgPatientBed from '../assets/Products/patient examination bed.jpg';
import imgPelvisSpine from '../assets/Products/pelvis spine model.jpg';
import imgPenutBall from '../assets/Products/penut ball.jpg';
import imgPulseCold from '../assets/Products/pulse cold compression therapy machine.jpg';
import imgRTMS from '../assets/Products/rTMS Brain  Therapy Machine.jpg';
import imgPdf97 from '../assets/Products/097 - FisioBoxRadialShockwaveTherapy (RSWT).webp';
import imgPdf123 from '../assets/Products/123 - Chiropetric Bed Electric.webp';
import imgPdf124 from '../assets/Products/124 - PMST.webp';
import imgPdf95 from '../assets/Products/095 - Advanced Focused Shockwave Therapy (ESWT).webp';
import imgPdf96 from '../assets/Products/096 - AdvancedHigh-IntensityLaser Therapy(HILT).webp';
import imgPdf101 from '../assets/Products/101 - Advanced Focused Shockwave Therapy (ESWT).webp';
import imgPdf98 from '../assets/Products/098 - TECAR PRO MAXTECAR(RET CET)Therapy&Electrotherapy(TENS IFC).webp';
import imgPdf83 from '../assets/Products/Intelect Puls.webp';
import imgPdf84 from '../assets/Products/084 - Piezonia PZO- G1.webp';
import imgPdf100 from '../assets/Products/100 - PMST LOOP PRO MAX GÇô High- Energy Pulsed Electromagnetic Field (PEMF) System.webp';
import imgPdf99 from '../assets/Products/099 - Advanced Focused Shockwave Therapy (ESWT).webp';
import imgPdf144 from '../assets/Products/144 - PMST And Laser.webp';
import imgPdf125 from '../assets/Products/125 - SWD 500.webp';
import imgPdf107 from '../assets/Products/107 - PortableMulti-FunctionalDiagnostic Therapy Workstation.webp';
import imgPdf34 from '../assets/Products/034 - Electrowave-500 (Shortwave Diathermy - SWD).webp';
import imgPdf36 from '../assets/Products/036 - 5 0 0 - w a t t model manufactured by LHC Medical System.webp';
import imgPdf46 from '../assets/Products/046 - professional radial pneumatic shockwave therapy machine.webp';
import imgPdf103 from '../assets/Products/103 - LHC-5000DX PHYSIO LASER THERAPY GÇô Low- Level Laser Therapy (LLLT) System.webp';
import imgPdf23 from '../assets/Products/023 - AUTOTRAC.500 Digital.Traction Machine.webp';
import imgPdf21 from '../assets/Products/021 - LHC-800 Auto Traction Lumber.webp';
import imgPdf91 from '../assets/Products/091 - FITWAY FW1000T Motorized Treadmill ,.webp';
import imgPdf129 from '../assets/Products/129 - 6 - C h a n n e l T.E.N.S.webp';
import imgPdf24 from '../assets/Products/024 - Meditech India Digital Cervical And.Lummar Traction.webp';
import imgPdf104 from '../assets/Products/104 - Premium Continuous Passive Motion (CPM) GÇô Advanced Knee & Hip Rehabilitation System.webp';
import imgPdf133 from '../assets/Products/133 - 5-in-1 Combination Therapy Physiotherapy Machine.webp';
import imgPdf130 from '../assets/Products/130 - 4-in-1CombinationTherapy Unit.webp';
import imgPdf143 from '../assets/Products/143 - Quadriceps chair.webp';
import imgPdf85 from '../assets/Products/085 - IFT+TENS+MS (LHC).webp';
import imgPdf9 from '../assets/Products/009 - Traction Bed.webp';
import imgPdf102 from '../assets/Products/102 - Tolly.webp';
import imgPdf4 from '../assets/Products/004 - Patient Bed 1-function.webp';
import imgPdf92 from '../assets/Products/092 - Device trolley Made in china 1 14,000.webp';
import imgPdf11 from '../assets/Products/011 - Patient Bed.webp';
import imgPdf106 from '../assets/Products/106 - Premium PhysicalTherapyTrainingStairs with Ramp(Corner Setup).webp';
import imgPdf105 from '../assets/Products/105 - PremiumWall-MountedShoulder Wheel GÇôAdvancedUpperLimbRehabilitationSystem.webp';
import imgPdf108 from '../assets/Products/108 - This portable clinics support trolley.webp';
import imgPdf86 from '../assets/Products/086 - Electric Mini Exercise Bike.webp';
import imgPdf146 from '../assets/Products/146 - Hijama Chair.webp';
import imgPdf121 from '../assets/Products/121 - X Ray view Box.webp';
import imgPdf127 from '../assets/Products/127 - Digital Deep Heat Therapy Machine.webp';
import imgPdf134 from '../assets/Products/134 - Wheelchair.webp';
import imgPdf58 from '../assets/Products/058 - Phoenix A2 Pro Athlete massage gun.webp';
import imgPdf60 from '../assets/Products/BA05 24V Massage Gun Deep Tissue Relaxes Muscle for Full Body Percussion Fascia.webp';
import imgPdf126 from '../assets/Products/126 - Item 126.webp';
import imgPdf115 from '../assets/Products/115 - BedsideCabinet.webp';
import imgPdf136 from '../assets/Products/136 - Omron Original Digital Blood Pressure Machine HEM 7120.webp';
import imgPdf59 from '../assets/Products/059 - 12 V Massage Gun.webp';
import imgPdf113 from '../assets/Products/113 - Three Stepclinics supporttrolley.webp';
import imgPdf114 from '../assets/Products/114 - Trolly 2 Step S.S.webp';
import imgPdf118 from '../assets/Products/118 - Rossmax Z1 Digital Blood Pressure Monitor.webp';
import imgPdf135 from '../assets/Products/135 - Double Head Massager GÇô Black.webp';
import imgPdf116 from '../assets/Products/116 - Jumper PulseOximete.webp';
import imgPdf120 from '../assets/Products/120 - PHILIPS IRR BLUB.webp';
import imgPdf122 from '../assets/Products/122 - Body weight machine.webp';
import imgPdf88 from '../assets/Products/088 - Foam Roller Country of Origin China 1 1,200.webp';
import imgPdf111 from '../assets/Products/111 - Medical Oxygen Regulator with Flow Meter.webp';
import imgPdf119 from '../assets/Products/119 - Hijama set cuppingset MassageCupping Drycupping set 12pcs.webp';
import imgPdf50 from '../assets/Products/050 - Physique Gym Ball.webp';
import imgPdf117 from '../assets/Products/117 - Baby FingertipPulse Oximeter.webp';
import imgPdf142 from '../assets/Products/142 - SAMSON GelExercise Ball GÇôRound Shape.webp';
import imgPdf138 from '../assets/Products/138 - Wooden Foot Massager Dual Sided Roller.webp';
import imgPdf140 from '../assets/Products/140 - Foot Massager Roller.webp';
import imgPdf137 from '../assets/Products/137 - Pully1250.webp';
import imgPdf141 from '../assets/Products/141 - TYNOR Thera Band.webp';
import imgPdf51 from '../assets/Products/051 - Dumbbell 0.5 kg.webp';
import imgPdf139 from '../assets/Products/139 - Acu Wooden Hand Roller.webp';
import imgPdf112 from '../assets/Products/112 - Nebulizer Mask (Adult).webp';
import imgPdf35 from '../assets/Products/035 - Advanced Shortwave Diathermy (SWD) GÇô 500W Continuous & Pulsed Therapy.webp';
import imgPdf89 from '../assets/Products/089 - Wax Bath Machine 10L 100% SS Body.webp';
import imgPdf90 from '../assets/Products/090 - Wax Bath Machine 14L 100% SS Body.webp';
import imgPdf93 from '../assets/Products/093 - Aesthetic equipment trolley.webp';
import imgPdf94 from '../assets/Products/094 - D u a l - t i e r adjustable device trolley.webp';
import imgPdf109 from '../assets/Products/109 - ECG Machine(6 Channel).webp';
import imgPdf110 from '../assets/Products/110 - CPR Model.webp';
import imgPdf128 from '../assets/Products/128 - Laser Therapy Unit.webp';
import imgPdf131 from '../assets/Products/131 - LHC-107 Digital Ultrasonic Therapy Machine.webp';
import imgPdf132 from '../assets/Products/132 - Microprocessor- Based 4-Channel TENS Automode + Ultrasonic Combination Therapy Machine.webp';

export const products = [
    {
        id: 1,
        name: "Shockwave Therapy Machine",
        price: 150000,
        description: "Professional ESWT shockwave unit for non-invasive treatment of plantar fasciitis, tendinopathy, and chronic musculoskeletal pain, enhancing blood flow and tissue regeneration.",
        image: imgShockwaveMain
    },
    {
        id: 2,
        name: "448kHz Radio Frequency (RF) Tecar Therapy Machine",
        price: 45000,
        description: "Advanced Tecar therapy device using 448kHz radiofrequency to deliver deep tissue heating, accelerating cellular repair, reducing inflammation, and relieving chronic pain with precision.",
        image: img448khzRF
    },
    {
        id: 3,
        name: "4-Channel TENS (Transcutaneous Electrical Nerve Stimulation)",
        price: 20000,
        description: "Four-channel TENS unit delivering targeted electrical pulses to block pain signals and stimulate endorphin release, ideal for chronic pain, post-surgical rehab, and neuromuscular conditions.",
        image: img4ChannelTens
    },
    {
        id: 4,
        name: "Electric Physiotherapy Therapy Beds",
        price: 155000,
        description: "Electrically adjustable multi-section therapy beds with motorised height and tilt functions, designed for clinical treatment, patient comfort, and easy therapist access.",
        image: imgElectricBeds
    },
    {
        id: 5,
        name: "Taiwan Tens Machine EV‑906",
        price: 4500,
        description: "High-performance TENS/EMS combination unit from Taiwan with multiple preset programs for pain management, muscle stimulation, and post-injury rehabilitation therapy.",
        image: imgTaiwanTens
    },
    {
        id: 6,
        name: "Shoulder Joint Anatomy Model",
        price: 2700,
        description: "Anatomical shoulder model displaying humerus, scapula, clavicle, and key ligaments, ideal for explaining rotator cuff injuries, dislocations, and rehabilitation plans to patients.",
        image: imgShoulderJoint
    },
    {
        id: 7,
        name: "Acupuncture Pen",
        price: 5000,
        description: "Electronic acupuncture pen that delivers gentle electrical stimulation to acupuncture points, offering a needle-free approach to pain relief, relaxation, and energy flow improvement.",
        image: imgAcupuncturePen
    },
    {
        id: 8,
        name: "Balance Ball 58cm",
        price: 3500,
        description: "Anti-burst exercise ball used for core strengthening, balance training, posture improvement, and active sitting, suitable for physiotherapy, fitness, and rehabilitation programs.",
        image: imgBalanceBall
    },
    {
        id: 9,
        name: "Comfy TENS Physiotherapy Machine",
        price: 4200,
        description: "User-friendly TENS unit designed for comfortable home and clinical use, offering adjustable stimulation modes to effectively manage acute and chronic pain conditions.",
        image: imgComfyTens
    },
    {
        id: 10,
        name: "Digital Cervical and Lumbar Traction Machine",
        price: 25000,
        description: "Motorised traction device for cervical and lumbar spine decompression, reducing nerve compression, disc herniation pain, and stiffness through controlled mechanical stretching.",
        image: imgDigitalCervical
    },
    {
        id: 11,
        name: "Dumbbell 1kg",
        price: 350,
        description: "Lightweight 1kg dumbbell with ergonomic grip, suitable for early-stage physiotherapy exercises, wrist strengthening, and upper limb rehabilitation protocols.",
        image: imgDumbbell1kg
    },
    {
        id: 12,
        name: "Dumbbell 3kg",
        price: 1050,
        description: "Medium-weight 3kg dumbbell for progressive resistance training, muscle strengthening, and upper body rehabilitation during physiotherapy sessions.",
        image: imgDumbbell3kg
    },
    {
        id: 13,
        name: "EV-906 EMB Digital TENS/EMS",
        description: "Advanced digital TENS/EMS combination device with EMG biofeedback capability, helping patients perform targeted muscle re-education and pain relief exercises with real-time feedback.",
        image: imgEV906
    },
    {
        id: 14,
        name: "Electric Physiotherapy Therapy Bed",
        price: 11000,
        description: "Single-section electric therapy bed with motorised height adjustment, providing a stable and comfortable treatment surface for manual therapy and physiotherapy procedures.",
        image: imgElectricBedSingle
    },
    {
        id: 15,
        name: "Electronic Acupuncture Stimulator Machine",
        price: 7000,
        description: "Multi-channel electronic acupuncture stimulator that applies precise electrical impulses to acupuncture and trigger points, promoting pain relief and muscle relaxation.",
        image: imgElectronicAcupuncture
    },
    {
        id: 16,
        name: "Evetor EFIT-533F Exercise Bike",
        price: 13500,
        description: "Compact stationary exercise bike with adjustable resistance, designed for cardiovascular conditioning, lower limb rehabilitation, and endurance training in clinical and home settings.",
        image: imgEvetorBike
    },
    {
        id: 17,
        name: "Exercise Resistance Band (Sports Band)",
        price: 1000,
        description: "Elastic resistance band ideal for strength training, stretching, and rehabilitation exercises, helping improve muscle strength, flexibility, and joint stability for all fitness levels.",
        image: imgExerciseBand
    },
    {
        id: 18,
        name: "Foldable Physiotherapy Exercise Bed",
        price: 14000,
        description: "Space-saving treatment bed designed for clinics and home visits, offering a sturdy and comfortable surface for manual therapy, exercise, and patient assessment.",
        image: imgFoldableBed
    },
    {
        id: 19,
        name: "Folding Pedal Exerciser",
        price: 2700,
        description: "Compact folding pedal exerciser for seated upper and lower limb cycling, improving circulation, joint mobility, and muscle strength in elderly and post-stroke patients.",
        image: imgFoldingPedal
    },
    {
        id: 20,
        name: "Full Spine Anatomical Model",
        price: 5000,
        description: "Life-size full spine model showing vertebrae, discs, and pelvis, perfect for teaching posture, spinal disorders, and treatment plans to patients and students.",
        image: imgFullSpine
    },
    {
        id: 21,
        name: "Hand Joint Model",
        price: 2200,
        description: "Detailed anatomical hand model showing bones, joints, and ligaments, ideal for patient education on hand injuries, arthritis, and post-surgical rehabilitation planning.",
        image: imgHandJoint
    },
    {
        id: 22,
        name: "Hydraulic Home Fitness Stepper with Handle",
        price: 7500,
        description: "Hydraulic mini stepper with adjustable resistance and stabilising handle bar, providing low-impact cardiovascular and lower limb strengthening workouts for home use.",
        image: imgHydraulicStepper
    },
    {
        id: 23,
        name: "Infrared Heat Lamp with Controller",
        price: 3500,
        description: "Infrared heat lamp with adjustable controller, delivering focused therapeutic warmth to relieve muscle tension, joint pain, and improve local circulation.",
        image: imgInfraredController
    },
    {
        id: 24,
        name: "Infrared Stand 275W with Timer & Regulator",
        price: 5500,
        description: "Height-adjustable infrared stand with 275-watt bulb, built-in timer, and intensity regulator, providing controlled heat therapy for pain relief and muscle relaxation.",
        image: imgInfraredStand275
    },
    {
        id: 25,
        name: "Kinesiology Sports Tape",
        price: 900,
        description: "Elastic kinesiology tape that supports muscles and joints without limiting movement, helps reduce pain, swelling, and speeds recovery during sports and daily activities.",
        image: imgKinesiologyTape
    },
    {
        id: 26,
        name: "Knee Joint Anatomy Model",
        price: 1800,
        description: "Detailed knee joint model showing bones, ligaments, and cartilage, ideal for explaining injuries like ACL tears, osteoarthritis, and post-surgery rehab protocols.",
        image: imgKneeJoint
    },
    {
        id: 27,
        name: "LHC Brand Digital Interferential Therapy Machine",
        price: 70000,
        description: "LHC digital interferential therapy unit that uses medium-frequency alternating currents to penetrate deep tissues, relieving pain and reducing muscle spasm effectively.",
        image: imgLHCInterferential
    },
    {
        id: 28,
        name: "LHC-101 TENS + MS Combination Physiotherapy Machine",
        price: 7500,
        description: "Combination TENS and muscle stimulation device from LHC, offering dual-therapy capability for simultaneous pain relief and motor point stimulation in one compact unit.",
        image: imgLHCTensMs
    },
    {
        id: 29,
        name: "Manual Exercise Bed (SS & MS Frame)",
        price: 8500,
        description: "Durable manual exercise bed made with stainless steel and mild steel, designed for therapeutic exercises, stretching, and patient positioning in physiotherapy settings.",
        image: imgManualBed
    },
    {
        id: 30,
        name: "Massage Gun",
        price: 1050,
        priceFrom: true,
        description: "High-frequency percussion massage gun with multiple interchangeable heads, delivering deep tissue vibration therapy to relieve soreness, improve recovery, and reduce muscle stiffness.",
        image: imgMassageGun
    },
    {
        id: 31,
        name: "Mini Human Skeleton Model",
        price: 1800,
        description: "Portable skeleton model with key bones and joints, excellent for basic anatomical teaching, clinic demonstrations, and patient education in physiotherapy practice.",
        image: imgMiniSkeleton
    },
    {
        id: 32,
        name: "Mini Shockwave Therapy Machine",
        price: 25000,
        description: "Compact extracorporeal shockwave device used to relieve chronic muscle and tendon pain, promote tissue healing, and support faster recovery in sports and orthopaedic rehab.",
        image: imgMiniShockwave
    },
    {
        id: 33,
        name: "Mini T.E.N.S. Two Channel Physiotherapy Machine",
        price: 5500,
        description: "Portable dual-channel TENS unit for on-the-go pain relief, featuring adjustable intensity settings and multiple waveforms suitable for both acute and chronic pain management.",
        image: imgMiniTens
    },
    {
        id: 34,
        name: "Muscle Stimulator-Dt (Model LNC-225)",
        price: 20000,
        description: "LNC-225 muscle stimulator providing targeted electrical stimulation for muscle re-education, spasm reduction, and strengthening in post-injury and neurological rehabilitation.",
        image: imgMuscleStimulator
    },
    {
        id: 35,
        name: "Non-Luminous Infrared (IRR) Big Stand",
        description: "Large non-luminous infrared therapy stand delivering deep, penetrating heat for wide-area treatment of muscle pain, joint stiffness, and improved blood circulation.",
        image: imgIRRBigStand
    },
    {
        id: 36,
        name: "Non-Luminous Infrared (IRR) Small Size",
        price: 7000,
        description: "Compact non-luminous infrared lamp for targeted heat therapy, suitable for small joint treatment, home use, and localised pain relief in physiotherapy clinics.",
        image: imgIRRSmall
    },
    {
        id: 37,
        name: "Non‑Luminous IRR Stand (Infrared Therapy Stand)",
        description: "Height-adjustable infrared therapy stand with non-luminous IR lamp head, providing deep heat for pain relief, muscle relaxation, and improved local blood circulation.",
        image: imgNonLuminousIRR
    },
    {
        id: 38,
        name: "Rehabilitation Robot Glove – Single Finger",
        description: "Smart robotic glove targeting individual finger rehabilitation with motorised resistance and assistance, supporting recovery from stroke, nerve injury, or hand surgery.",
        image: imgRehabRobotSingle
    },
    {
        id: 39,
        name: "Rehabilitation Robot Glove Set",
        description: "Complete robotic glove rehabilitation system supporting full hand passive and active-assisted exercises, designed for stroke patients and hand function recovery.",
        image: imgRehabRobotSet
    },
    {
        id: 40,
        name: "Robotic Hand Exercise Trainer",
        price: 10000,
        description: "Rehabilitation robotic hand device assisting active and passive finger and hand movements, helping patients regain strength, coordination, and functional use after stroke or nerve injury.",
        image: imgRoboticHand
    },
    {
        id: 41,
        name: "SONOPOWER-003 Digital Ultrasonic Therapy Machine",
        price: 25500,
        description: "Digital ultrasound therapy machine delivering precise therapeutic ultrasound for tissue heating, pain relief, and soft tissue healing at 1MHz frequency.",
        image: imgSonopowerDig003
    },
    {
        id: 42,
        name: "SONOPOWER-004 Digital Ultrasonic Therapy Machine",
        price: 35000,
        description: "Advanced digital ultrasound therapy device with dual frequency modes, offering enhanced deep tissue penetration for faster healing and effective pain management.",
        image: imgSonopowerDig004
    },
    {
        id: 43,
        name: "Shockwave Therapy Machine (Alternate Model)",
        price: 150000,
        description: "Alternate ESWT shockwave system for non-invasive musculoskeletal pain treatment, ideal for calcific tendinitis, heel spur, and chronic soft tissue disorders.",
        image: imgShockwaveAlt
    },
    {
        id: 44,
        name: "Shortwave Diathermy Therapy Machine",
        price: 16500,
        description: "Shortwave therapy device delivering deep heat to muscles and joints, used to reduce pain, stiffness, and muscle spasm in physiotherapy and rehabilitation clinics.",
        image: imgShortwaveDiathermy
    },
    {
        id: 45,
        name: "Shortwave Diathermy (SWD) Bulb 250 and 500 Watt",
        price: 4000,
        description: "Replacement SWD bulbs available in 250W and 500W capacities, compatible with standard shortwave diathermy machines for continued deep heat therapy sessions.",
        image: imgShortwaveBulb
    },
    {
        id: 46,
        name: "Shoulder Joint Model",
        description: "Compact shoulder joint anatomical model ideal for clinical demonstrations, explaining shoulder anatomy, common injuries, and post-operative rehabilitation to patients.",
        image: imgShoulderJointAlt
    },
    {
        id: 47,
        name: "Sonopower Therapy 1 MHz",
        price: 35000,
        description: "1MHz therapeutic ultrasound device for targeted deep tissue treatment, improving blood flow, reducing scar tissue, and accelerating musculoskeletal healing.",
        image: imgSonopower1mz
    },
    {
        id: 48,
        name: "Sonopower Therapy 1 and 3 MHz",
        price: 55000,
        description: "Dual-frequency ultrasound therapy machine supporting both 1MHz and 3MHz modes, offering versatile depth control for treating superficial and deep tissue conditions.",
        image: imgSonopower13mz
    },
    {
        id: 49,
        name: "Spiky Tactile Balance Cushion",
        price: 1000,
        description: "Textured balance cushion with sensory spikes for proprioception training, core stability, and tactile stimulation, suitable for rehabilitation and balance improvement exercises.",
        image: imgSpikyCushion
    },
    {
        id: 50,
        name: "Stainless Steel Gua Sha Scraping Massage Tool Set",
        description: "Professional stainless steel Gua Sha tool set for IASTM (instrument-assisted soft tissue mobilisation), improving fascia health, reducing adhesions, and relieving muscle tension.",
        image: imgGuaSha
    },
    {
        id: 51,
        name: "Stimpower",
        price: 35000,
        description: "Versatile electrical stimulation unit combining TENS, EMS, and interferential current modes for comprehensive pain management and neuromuscular rehabilitation in clinic settings.",
        image: imgStimpower
    },
    {
        id: 52,
        name: "TENS Machine Pin Pad",
        price: 120,
        description: "Replacement pin pad electrode set for TENS machines, ensuring secure and hygienic electrode connections for consistent electrical stimulation during physiotherapy treatments.",
        image: imgTansPinPad
    },
    {
        id: 53,
        name: "Ultrasound Therapy Machine",
        description: "Therapeutic ultrasound device delivering deep tissue heating and micro-massage, helping reduce pain, inflammation, and promote soft tissue healing in physiotherapy practice.",
        image: imgUltrasound
    },
    {
        id: 54,
        name: "Weight Cuff (Ankle/Wrist Weight)",
        price: 250,
        priceFrom: true,
        description: "Adjustable weight cuff for ankle or wrist, used to add resistance during strengthening and gait training exercises, improving muscle power and endurance in rehabilitation programs.",
        image: imgWeightCuff
    },
    {
        id: 55,
        name: "Acupuncture Needle",
        description: "Sterile, single-use acupuncture needles in various gauges and lengths, precision-engineered for dry needling and traditional acupuncture therapy with minimal patient discomfort.",
        image: imgAcupunctureNeedle
    },
    {
        id: 56,
        name: "Anatomical Human Skeleton with Nerve Model",
        price: 7000,
        description: "Full-size human skeleton model with highlighted nerve pathways, ideal for teaching neuroanatomy, explaining nerve compression syndromes, and demonstrating rehabilitation strategies.",
        image: imgAnatomicalSkeleton
    },
    {
        id: 57,
        name: "Ankle Joint Model",
        price: 1800,
        description: "Detailed ankle joint anatomical model displaying bones, ligaments, and tendons, ideal for explaining ankle sprains, fractures, and rehabilitation procedures to patients.",
        image: imgAnkleJoint
    },
    {
        id: 58,
        name: "Ballistic Extracorporeal Shock Wave Therapy (ESWT) Machine",
        price: 250000,
        description: "Ballistic ESWT machine delivering high-energy shockwaves to break down calcifications, stimulate tissue regeneration, and treat chronic tendinopathies and plantar fasciitis.",
        image: imgBallisticESWT
    },
    {
        id: 59,
        name: "Cervical Spine Anatomical Models",
        price: 3200,
        description: "Detailed cervical spine model with individual vertebrae, intervertebral discs, and nerve roots, essential for explaining cervical disc herniation and nerve compression to patients.",
        image: imgCervicalSpine
    },
    {
        id: 60,
        name: "Dumbbell 2kg",
        price: 700,
        description: "Lightweight 2kg dumbbell suitable for progressive resistance exercises, early-stage upper limb rehabilitation, and strength conditioning under physiotherapy supervision.",
        image: imgDumbbell2kg
    },
    {
        id: 61,
        name: "Dumbbell 5kg",
        price: 1750,
        description: "5kg dumbbell for intermediate resistance training and upper limb strengthening, suitable for progressive rehabilitation and functional fitness programs.",
        image: imgDumbbell5kg
    },
    {
        id: 62,
        name: "Hernia Discal Model",
        price: 2000,
        description: "Educational model demonstrating intervertebral disc herniation and nerve root compression, helping physiotherapists explain spinal pathology and treatment rationale to patients.",
        image: imgHerniaDiscal
    },
    {
        id: 63,
        name: "Infrared Heat Therapy Lamp with Stand 275W",
        price: 6500,
        priceFrom: true,
        description: "275-watt infrared heat therapy lamp on adjustable stand, providing targeted deep heat treatment for muscle aches, joint pain, and improved local blood circulation.",
        image: imgInfraredLampStand
    },
    {
        id: 64,
        name: "Lumbar Spine Anatomy Model",
        price: 2500,
        description: "Life-size lumbar spine model showing vertebrae, discs, and sacrum, perfect for patient education on lower back pain, disc disorders, and lumbar rehabilitation protocols.",
        image: imgLumbarSpine
    },
    {
        id: 65,
        name: "Patient Examination Bed",
        price: 11500,
        description: "Sturdy patient examination bed with easy-clean upholstery and stable frame, providing a safe and comfortable surface for clinical assessments and physiotherapy examinations.",
        image: imgPatientBed
    },
    {
        id: 66,
        name: "Pelvis Spine Model",
        price: 2800,
        description: "Anatomical pelvis and lumbar spine model illustrating sacroiliac joints, disc levels, and pelvic alignment, essential for explaining posture disorders and low back conditions.",
        image: imgPelvisSpine
    },
    {
        id: 67,
        name: "Peanut Ball",
        price: 1200,
        description: "Peanut-shaped exercise ball providing enhanced stability for Pilates, yoga, and physiotherapy exercises, reducing rolling tendency for improved balance and core strengthening.",
        image: imgPenutBall
    },
    {
        id: 68,
        name: "Pulse Cold Compression Therapy Machine",
        price: 65000,
        description: "Integrated cold compression therapy system combining adjustable pneumatic compression with cryotherapy to control swelling, reduce pain, and accelerate post-injury or post-surgical recovery.",
        image: imgPulseCold
    },
    {
        id: 69,
        name: "rTMS Brain Therapy Machine",
        price: 65000,
        description: "Repetitive Transcranial Magnetic Stimulation system delivering non-invasive magnetic pulses to targeted brain areas, supporting treatment of neurological and psychiatric conditions under medical supervision.",
        image: imgRTMS
    },
    {
        id: 70,
        name: "FisioBox Radial Shockwave Therapy (RSWT)",
        price: 900000,
        description: "Radial shockwave therapy workstation with high-resolution smart display, modular multi-layer design, ergonomic radial handpiece and tips, comprehensive safety features and a heavy-duty mobile workstation.",
        image: imgPdf97
    },
    {
        id: 71,
        name: "Chiropractic Bed Electric",
        price: 600000,
        description: "Electrically operated chiropractic treatment bed for spinal therapy and adjustment sessions in clinics. Country of Origin: China.",
        image: imgPdf123
    },
    {
        id: 72,
        name: "PMST Machine",
        price: 600000,
        description: "PMST electromagnetic therapy system for pain relief and rehabilitation treatments. Country of Origin: China.",
        image: imgPdf124
    },
    {
        id: 73,
        name: "Advanced Focused Shockwave Therapy (ESWT)",
        price: 530000,
        description: "High-precision focused shockwave therapy (ESWT) with focused waves, smart touchscreen interface and ergonomic applicator handpiece.",
        image: imgPdf95
    },
    {
        id: 74,
        name: "Advanced High-Intensity Laser Therapy (HILT)",
        price: 530000,
        description: "High-intensity laser therapy system with multi-joint articulated arm, advanced touchscreen control panel and emergency safety stop key.",
        image: imgPdf96
    },
    {
        id: 75,
        name: "Advanced Focused Shockwave Therapy (ESWT) with Smart Control",
        price: 520000,
        description: "High-precision focused shockwave therapy (ESWT) with smart touchscreen control and ergonomic handpiece and cable.",
        image: imgPdf101
    },
    {
        id: 76,
        name: "TECAR PRO MAX",
        price: 520000,
        description: "Integrated TECAR (RET/CET) therapy and electrotherapy system with TENS and IFC modes, advanced anatomical smart interface, multi-channel output and ergonomic design with storage.",
        image: imgPdf98
    },
    {
        id: 77,
        name: "Intelect Puls",
        price: 500000,
        description: "Intelect Puls series physiotherapy machine used for pain relief and rehabilitation. Country of Origin: China.",
        image: imgPdf83
    },
    {
        id: 78,
        name: "Piezonia PZO-G1 Focused Shockwave",
        price: 500000,
        description: "Piezonia PZO-G1 piezoelectric focused shockwave therapy device used for pain relief and rehabilitation. Country of Origin: China.",
        image: imgPdf84
    },
    {
        id: 79,
        name: "PMST LOOP PRO MAX PEMF System",
        price: 420000,
        description: "High-energy pulsed electromagnetic field (PEMF) system with multi-size electromagnetic loops, advanced smart interface with pulse waveform, anatomical treatment protocols and heavy-duty mobile stand.",
        image: imgPdf100
    },
    {
        id: 80,
        name: "Advanced Focused Shockwave Therapy (ESWT) with Touchscreen",
        price: 300000,
        description: "High-precision focused shockwave therapy (ESWT) with high-precision focused energy, smart touchscreen control and ergonomic handpiece and cable.",
        image: imgPdf99
    },
    {
        id: 81,
        name: "PMST and Laser Therapy System",
        price: 250000,
        description: "Combined PMST and laser therapy system for pain relief and rehabilitation treatments.",
        image: imgPdf144
    },
    {
        id: 82,
        name: "SWD 500 Shortwave Diathermy (India)",
        price: 200000,
        description: "500 watt shortwave diathermy machine for deep heat therapy in physiotherapy clinics. Country of Origin: India.",
        image: imgPdf125
    },
    {
        id: 83,
        name: "Portable Multi-Functional Diagnostic/Therapy Workstation",
        price: 190000,
        description: "Portable workstation with vertical high-definition smart display, sleek dual-tone tower design, premium heavy-duty flight case and ultra-smooth 4-wheel rolling base.",
        image: imgPdf107
    },
    {
        id: 84,
        name: "Electrowave-500 Shortwave Diathermy (SWD)",
        price: 150000,
        description: "Shortwave diathermy machine with dual-knob precision tuning control, heavy-duty metal cabinet with ventilation, integrated heavy cable and pad holder, on industrial castor wheels for mobility.",
        image: imgPdf34
    },
    {
        id: 85,
        name: "LHC 500W Shortwave Diathermy",
        price: 150000,
        description: "500-watt shortwave diathermy model manufactured by LHC Medical System, with digital timer and intensity control, on castor wheels for mobility in clinical settings.",
        image: imgPdf36
    },
    {
        id: 86,
        name: "Professional Radial Pneumatic Shockwave Therapy Machine",
        price: 130000,
        description: "Professional radial pneumatic shockwave therapy machine using ballistic principles to generate pressure waves aimed at tissue sources to dissolve calcium deposits and improve vascularization. Country of Origin: China.",
        image: imgPdf46
    },
    {
        id: 87,
        name: "LHC-5000DX Physio Laser Therapy (LLLT)",
        price: 130000,
        description: "Low-level laser therapy (LLLT) system with dual therapeutic probes (multi-diode configuration), large centered digital display, sleek table-top design and integrated safety and quick controls.",
        image: imgPdf103
    },
    {
        id: 88,
        name: "AUTOTRAC.500 Digital Traction Machine",
        price: 75000,
        description: "Digital traction machine with pulling power adjustable from 5 to 50 kgs, auto-release engage mechanism, silent motor and patient safety switch. Brand: TechnoMed, Country of Origin: India.",
        image: imgPdf23
    },
    {
        id: 89,
        name: "LHC-800 Auto Traction",
        price: 65000,
        description: "Auto traction (lumbar) unit with pulling power adjustable from 5 to 50 kgs, auto-release engage mechanism, silent motor and patient safety switch. Country of Origin: India.",
        image: imgPdf21
    },
    {
        id: 90,
        name: "FITWAY FW1000T Motorized Treadmill",
        price: 55000,
        description: "Motorized treadmill with advanced digital console, ergonomic quick-control panel, emergency safety stop key, integrated storage and media device holder and dual-grip heart rate monitor. Country of Origin: China.",
        image: imgPdf91
    },
    {
        id: 91,
        name: "6-Channel T.E.N.S.",
        price: 35000,
        description: "6-channel T.E.N.S. unit with digital LCD display, pulse width modulation and sweep modes, treatment timer from 0 to 99 minutes with automatic cutoff buzzer, and frequency adjustable from 2 Hz to 150 Hz. Country of Origin: India.",
        image: imgPdf129
    },
    {
        id: 92,
        name: "Meditech Digital Cervical and Lumbar Traction",
        price: 30000,
        description: "Digital cervical and lumbar traction machine by Meditech India, with 50Hz frequency, 240V voltage, hold time 0-80 seconds, rest time 1-20 seconds and LED display. Country of Origin: India.",
        image: imgPdf24
    },
    {
        id: 93,
        name: "Premium CPM Knee and Hip Rehabilitation System",
        price: 30000,
        description: "Continuous passive motion (CPM) system for knee and hip rehabilitation with precise angle and range of motion control, ergonomic padded leg support with safety straps, adjustable patient height track and robust, silent mechanical drive.",
        image: imgPdf104
    },
    {
        id: 94,
        name: "5-in-1 Combination Therapy Physiotherapy Machine",
        price: 28000,
        description: "5-in-1 combination therapy machine with I.F.T. (interferential therapy), T.E.N.S., M.S. (muscle stimulator) and deep heat therapy modes.",
        image: imgPdf133
    },
    {
        id: 95,
        name: "4-in-1 Combination Therapy Unit",
        price: 25000,
        description: "4-in-1 combination therapy unit with I.F.T., TENS, M.S. (muscle stimulator EMS) and digital ultrasonic therapy. Country of Origin: India.",
        image: imgPdf130
    },
    {
        id: 96,
        name: "Quadriceps Chair",
        price: 22000,
        description: "Quadriceps exercise chair for knee strengthening and lower limb rehabilitation exercises in physiotherapy clinics.",
        image: imgPdf143
    },
    {
        id: 97,
        name: "IFT+TENS+MS (LHC)",
        price: 20000,
        description: "3-in-1 physiotherapy machine offering interferential therapy (IFT), transcutaneous electrical nerve stimulation (TENS) and muscle stimulation (MS) for pain relief and rehabilitation.",
        image: imgPdf85
    },
    {
        id: 98,
        name: "Traction Bed",
        price: 16500,
        description: "A traction bed is a specialized physical therapy table used to gently stretch the spine and joints.",
        image: imgPdf9
    },
    {
        id: 99,
        name: "Tolly (Clinic Trolley)",
        price: 15000,
        description: "Equipment trolley for clinic use. Made in China.",
        image: imgPdf102
    },
    {
        id: 100,
        name: "Patient Bed 1-Function",
        price: 14000,
        description: "1-function manual patient bed with hand cranks for adjusting the backrest and leg position. Country of Origin: Bangladesh.",
        image: imgPdf4
    },
    {
        id: 101,
        name: "Device Trolley",
        price: 14000,
        description: "Device trolley for holding and moving therapy equipment in clinics. Made in China.",
        image: imgPdf92
    },
    {
        id: 102,
        name: "Patient Bed (Single Crank)",
        price: 13500,
        description: "Single crank patient bed designed for complete patient comfort, with optional configurations such as table, mattress and grid over the bed. Country of Origin: Bangladesh.",
        image: imgPdf11
    },
    {
        id: 103,
        name: "Premium Therapy Training Stairs with Ramp (Corner Setup)",
        price: 12000,
        description: "Premium physical therapy dual training system with stairs and ramp combo in a corner setup, adjustable, with stainless steel handrails, anti-slip high-traction surface and sturdy wooden platform base.",
        image: imgPdf106
    },
    {
        id: 104,
        name: "Premium Wall-Mounted Shoulder Wheel",
        price: 11000,
        description: "Premium wall-mounted shoulder wheel for upper limb rehabilitation, with high-grade chrome-plated steel wheel, adjustable resistance mechanism, 360-degree fluid rotation with adjustable handle and solid wooden wall-mount base.",
        image: imgPdf105
    },
    {
        id: 105,
        name: "Portable Clinics Support Trolley",
        price: 11000,
        description: "Portable trolley for clinics to support devices like ultrasound or ECG machines. Made in China.",
        image: imgPdf108
    },
    {
        id: 106,
        name: "Electric Mini Exercise Bike",
        price: 9000,
        description: "Compact electric mini exercise bike for seated upper and lower limb cycling, improving circulation, joint mobility and muscle strength in elderly and post-stroke patients. Country of Origin: China.",
        image: imgPdf86
    },
    {
        id: 107,
        name: "Hijama Chair",
        price: 8000,
        description: "Chair designed for hijama (cupping) therapy sessions in clinics.",
        image: imgPdf146
    },
    {
        id: 108,
        name: "X Ray View Box",
        price: 8000,
        description: "X-ray view box for reading X-ray films in clinics and hospitals. Country of Origin: China.",
        image: imgPdf121
    },
    {
        id: 109,
        name: "Digital Deep Heat Therapy Machine",
        price: 8000,
        description: "Digital deep heat therapy machine for physiotherapy treatment. Country of Origin: India.",
        image: imgPdf127
    },
    {
        id: 110,
        name: "Wheelchair",
        price: 7500,
        description: "Manual folding wheelchair with semi-fold chromed steel body and 120 kg load capacity. Origin: China.",
        image: imgPdf134
    },
    {
        id: 111,
        name: "Phoenix A2 Pro Athlete Massage Gun",
        price: 7000,
        description: "Phoenix A2 Pro athlete massage gun with high frequency percussion for muscle relaxation and body recovery, supplied with a portable bag. Certification: CE.",
        image: imgPdf58
    },
    {
        id: 112,
        name: "BA0524V Massage Gun Deep Tissue",
        price: 5500,
        description: "Deep tissue percussion massage gun for full body, with 60W brushless motor, 10-12mm travel distance, 30 speed levels from 1800 to 3200 beats/min, 6 massage heads and touch screen control. Country of Origin: China.",
        image: imgPdf60
    },
    {
        id: 113,
        name: "Mini Ultrasonic Therapy Machine (PHS-2025)",
        price: 5000,
        description: "Portable mini ultrasonic therapy machine (Model PHS-2025) used in physiotherapy and rehabilitation for muscle relaxation and pain relief. Country of Origin: India.",
        image: imgPdf126
    },
    {
        id: 114,
        name: "Bedside Cabinet",
        price: 4000,
        description: "Medical bedside locker with wheels, featuring a blue drawer, an open shelf and a lower locker. Country of Origin: Bangladesh.",
        image: imgPdf115
    },
    {
        id: 115,
        name: "Omron Digital Blood Pressure Machine HEM 7120",
        price: 4000,
        description: "Fully automatic upper-arm digital blood pressure monitor with IntelliSense technology for comfortable and precise readings, one-touch operation and irregular heartbeat detection. Origin: Vietnam.",
        image: imgPdf136
    },
    {
        id: 116,
        name: "12V Massage Gun",
        price: 3500,
        description: "Rechargeable massage gun with a long-lasting 2600mAh lithium battery, lasting up to 3-8 hours of use after a full charge in just 2.5 hours.",
        image: imgPdf59
    },
    {
        id: 117,
        name: "Three Step Clinics Support Trolley",
        price: 3500,
        description: "Three step clinic support trolley. Country of Origin: Bangladesh.",
        image: imgPdf113
    },
    {
        id: 118,
        name: "Trolly 2 Step S.S",
        price: 3200,
        description: "Two step stainless steel trolley for clinics. Country of Origin: Bangladesh.",
        image: imgPdf114
    },
    {
        id: 119,
        name: "Rossmax Z1 Digital Blood Pressure Monitor",
        price: 2300,
        description: "Digital blood pressure monitor designed for accurate and easy BP measurement, with one-touch operation and a clear LCD display, ideal for home use.",
        image: imgPdf118
    },
    {
        id: 120,
        name: "Double Head Massager",
        price: 1800,
        description: "Handheld double head massager with infrared heating, dual massage and vibration function, ergonomically designed long handle, speed control and two detachable heads. Origin: China.",
        image: imgPdf135
    },
    {
        id: 121,
        name: "Jumper Pulse Oximeter",
        price: 1550,
        description: "Fingertip pulse oximeter that measures SpO2 (blood oxygen saturation) and pulse rate in just a few seconds, with a high-performance OLED display.",
        image: imgPdf116
    },
    {
        id: 122,
        name: "Philips IRR Bulb",
        price: 1500,
        description: "Philips infrared therapy bulb. Country of Origin: Poland.",
        image: imgPdf120
    },
    {
        id: 123,
        name: "Camry Digital Weight Machine EB9383",
        price: 1300,
        description: "Camry digital body weight machine, model EB9383. Country of Origin: China.",
        image: imgPdf122
    },
    {
        id: 124,
        name: "Foam Roller",
        price: 1200,
        description: "Foam roller for exercise, muscle recovery and physiotherapy routines. Country of Origin: China.",
        image: imgPdf88
    },
    {
        id: 125,
        name: "Medical Oxygen Regulator with Flow Meter",
        price: 1100,
        description: "Complete oxygen delivery system with pressure regulator, flow meter and humidifying bottle, with accurate adjustable flow control (0-15 L/min).",
        image: imgPdf111
    },
    {
        id: 126,
        name: "Hijama Set / Cupping Set 12pcs",
        price: 900,
        description: "Hijama cupping set with 12 pieces for massage cupping and dry cupping therapy. Country of Origin: China.",
        image: imgPdf119
    },
    {
        id: 127,
        name: "Physique Gym Ball",
        price: 800,
        description: "The Physique Gym Ball is a large inflatable ball designed to train performance at all levels while providing an unstable surface. Country of Origin: China.",
        image: imgPdf50
    },
    {
        id: 128,
        name: "Baby Fingertip Pulse Oximeter",
        price: 800,
        description: "Baby fingertip pulse oximeter with a gentle pediatric sensor for accurate SpO2 and pulse rate monitoring, lightweight with an easy-to-read display, perfect for home and neonatal care.",
        image: imgPdf117
    },
    {
        id: 129,
        name: "SAMSON Gel Exercise Ball (Round Shape)",
        price: 800,
        description: "Gel exercise ball (round shape) for strengthening grip, improving hand mobility and relieving stress, with a soft yet firm texture, ideal for therapy, fitness or relaxation.",
        image: imgPdf142
    },
    {
        id: 130,
        name: "Wooden Foot Massager (Dual Sided Roller)",
        price: 600,
        description: "Wooden foot massager with dual sided roller, a home, gym or sports exerciser for men and women.",
        image: imgPdf138
    },
    {
        id: 131,
        name: "Foot Massager Roller",
        price: 400,
        description: "Foot massager roller, a home, gym or sports exerciser for men and women.",
        image: imgPdf140
    },
    {
        id: 132,
        name: "Pully",
        price: 250,
        description: "Pulley exerciser for shoulder and upper limb rehabilitation exercises.",
        image: imgPdf137
    },
    {
        id: 133,
        name: "TYNOR Thera Band",
        price: 250,
        description: "High-quality elastic thera band used for physiotherapy exercises and rehabilitation routines, offering resistance training for muscle strengthening and flexibility improvement for users of all fitness levels.",
        image: imgPdf141
    },
    {
        id: 134,
        name: "Dumbbell 0.5 kg",
        price: 200,
        description: "Lightweight 0.5kg dumbbell with ergonomic grip, suitable for early-stage physiotherapy exercises, wrist strengthening and upper limb rehabilitation protocols. Country of Origin: China.",
        image: imgPdf51
    },
    {
        id: 135,
        name: "Acu Wooden Hand Roller",
        price: 200,
        description: "Acu wooden hand roller massager, a home, gym or sports exerciser for men and women.",
        image: imgPdf139
    },
    {
        id: 136,
        name: "Nebulizer Mask (Adult)",
        price: 80,
        description: "Nebulizer mask for adults, allowing the patient to inhale aerosol medication through the nose and mouth during treatment.",
        image: imgPdf112
    },
    {
        id: 137,
        name: "Advanced Shortwave Diathermy (SWD) 500W",
        description: "Heavy-duty 500W shortwave diathermy with continuous and pulsed therapy, dual adjustable disc applicators (Schliephake pads), analogue and digital precision control panel and rugged cabinet design with cooling vents.",
        image: imgPdf35
    },
    {
        id: 138,
        name: "Wax Bath Machine 10L",
        description: "Wax bath machine with 10L capacity and 100% stainless steel body for paraffin wax therapy.",
        image: imgPdf89
    },
    {
        id: 139,
        name: "Wax Bath Machine 14L",
        description: "Wax bath machine with 14L capacity and 100% stainless steel body for paraffin wax therapy.",
        image: imgPdf90
    },
    {
        id: 140,
        name: "Aesthetic Equipment Trolley",
        description: "Aesthetic equipment trolley for clinics. Made in China.",
        image: imgPdf93
    },
    {
        id: 141,
        name: "Dual-Tier Adjustable Device Trolley",
        description: "Dual-tier adjustable device trolley for clinics. Made in China.",
        image: imgPdf94
    },
    {
        id: 142,
        name: "ECG Machine (6 Channel)",
        description: "ECG machine (6 channel) with 7 inch high resolution color touch screen, 12-lead simultaneous acquisition and display, automatic measurement and interpretation, and complete digital filters resisting baseline drift, AC and EMG interference. Country of Origin: China.",
        image: imgPdf109
    },
    {
        id: 143,
        name: "CPR Model",
        description: "The Brayden CPR manikin lets students see the real point of CPR, getting blood flow to the brain and other organs. Country of Origin: China.",
        image: imgPdf110
    },
    {
        id: 144,
        name: "Laser Therapy Unit",
        description: "Laser therapy unit, corded electric with metal body. Brand: PHYSIO, Factory Delhi, India.",
        image: imgPdf128
    },
    {
        id: 145,
        name: "LHC-107 Digital Ultrasonic Therapy Machine",
        description: "Digital ultrasonic therapy machine with digital display panels and mode select interface. Country of Origin: India.",
        image: imgPdf131
    },
    {
        id: 146,
        name: "Microprocessor 4-Channel TENS + Ultrasonic Combination Therapy Machine",
        description: "Microprocessor-based 4-channel TENS automode combination therapy machine with 1 MHz ultrasonic therapy. Country of Origin: India.",
        image: imgPdf132
    }
];

const Products = () => {
    return (
        <div className="products-page">
            <div className="page-header">
                <div className="container">
                    <h1>Physiotherapy Machines and Equipment</h1>
                    <p>Explore our wide range of physiotherapy equipment</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="products-intro">
                        <p>
                            PhysioCare BD supplies physiotherapy machines and rehabilitation equipment to
                            hospitals, clinics, physiotherapists and individual patients across Bangladesh.
                            Our range covers electrotherapy machines such as TENS, EMS and interferential
                            units, ultrasound and shockwave therapy machines, traction units, infrared
                            lamps, therapy beds, exercise equipment and anatomy models.
                        </p>
                        <p>
                            Prices are shown with each product and were updated in November 2026. To order
                            or ask about a product, tap Inquire Now and our sales team will confirm
                            availability on WhatsApp. See our{" "}
                            <a href="/shipping-info">shipping information</a> and{" "}
                            <a href="/return-policy">return policy</a>, or{" "}
                            <a href="/contact">contact us</a> for help choosing the right equipment.
                        </p>
                        <p>
                            Physiotherapy equipment should be selected and used under the guidance of a
                            qualified physiotherapist or medical professional. Please read our{" "}
                            <a href="/disclaimer">disclaimer</a> before ordering.
                        </p>
                    </div>
                    <div className="category-browse">
                        <h2>Browse by Equipment Type</h2>
                        <ul>
                            {categories.map((category) => (
                                <li key={category.slug}>
                                    <Link to={`/products/${category.slug}`}>{category.name}</Link>
                                    <span> ({category.productIds.length} products)</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="products-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="catalog-note">
                        <p>Buying for a clinic, hospital or in bulk?</p>
                        <p className="sub-note">Call us on +8801818758882 or message on WhatsApp for a special business price.</p>
                    </div>
                    <div className="catalog-note">
                        <p>Don't see what you're looking for?</p>
                        <p className="sub-note">We have a vast inventory. Contact us for specific requirements.</p>
                    </div>

                    <div className="products-faq">
                        <h2>Physiotherapy Equipment Prices and Buying Questions</h2>
                        {productFaqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
        .page-header {
          background-color: var(--bg-light);
          padding: 4rem 0;
          text-align: center;
          border-bottom: 1px solid #e2e8f0;
        }
        .page-header h1 {
          font-size: 3rem;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        .page-header p {
          color: var(--secondary);
          font-size: 1.2rem;
        }
        .products-intro {
          max-width: 820px;
          margin: 0 auto 3rem;
          color: var(--text-light);
          line-height: 1.7;
        }
        .products-intro p { margin-bottom: 1rem; }
        .products-intro a { color: var(--primary-dark); font-weight: 600; }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .category-browse {
          max-width: 820px;
          margin: 0 auto 3rem;
        }
        .category-browse h2 {
          color: var(--text-dark);
          margin-bottom: 1rem;
          text-align: center;
        }
        .category-browse ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem 1.5rem;
          justify-content: center;
          padding: 0;
        }
        .category-browse a { color: var(--primary-dark); font-weight: 600; }
        .category-browse span { color: var(--text-light); }
        .products-faq {
          max-width: 820px;
          margin: 4rem auto 0;
        }
        .products-faq h2 {
          color: var(--text-dark);
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .products-faq .faq-item { margin-bottom: 1.75rem; }
        .products-faq h3 { color: var(--text-dark); margin-bottom: 0.5rem; }
        .products-faq p { color: var(--text-light); line-height: 1.7; }
        .catalog-note {
          text-align: center;
          background: var(--primary-light);
          padding: 3rem;
          border-radius: var(--radius);
          border: 1px solid var(--primary-light);
        }
        .catalog-note p {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-dark);
        }
        .catalog-note .sub-note {
          font-size: 1rem;
          font-weight: 400;
          margin-top: 0.5rem;
        }
      `}</style>
        </div>
    );
};

export default Products;
