import ProductCard from '../components/ProductCard';

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

const products = [
    {
        id: 1,
        name: "Shockwave Therapy Machine",
        description: "Professional ESWT shockwave unit for non-invasive treatment of plantar fasciitis, tendinopathy, and chronic musculoskeletal pain, enhancing blood flow and tissue regeneration.",
        image: imgShockwaveMain
    },
    {
        id: 2,
        name: "448kHz Radio Frequency (RF) Tecar Therapy Machine",
        description: "Advanced Tecar therapy device using 448kHz radiofrequency to deliver deep tissue heating, accelerating cellular repair, reducing inflammation, and relieving chronic pain with precision.",
        image: img448khzRF
    },
    {
        id: 3,
        name: "4-Channel TENS (Transcutaneous Electrical Nerve Stimulation)",
        description: "Four-channel TENS unit delivering targeted electrical pulses to block pain signals and stimulate endorphin release, ideal for chronic pain, post-surgical rehab, and neuromuscular conditions.",
        image: img4ChannelTens
    },
    {
        id: 4,
        name: "Electric Physiotherapy Therapy Beds",
        description: "Electrically adjustable multi-section therapy beds with motorised height and tilt functions, designed for clinical treatment, patient comfort, and easy therapist access.",
        image: imgElectricBeds
    },
    {
        id: 5,
        name: "Taiwan Tens Machine EV‑906",
        description: "High-performance TENS/EMS combination unit from Taiwan with multiple preset programs for pain management, muscle stimulation, and post-injury rehabilitation therapy.",
        image: imgTaiwanTens
    },
    {
        id: 6,
        name: "Shoulder Joint Anatomy Model",
        description: "Anatomical shoulder model displaying humerus, scapula, clavicle, and key ligaments, ideal for explaining rotator cuff injuries, dislocations, and rehabilitation plans to patients.",
        image: imgShoulderJoint
    },
    {
        id: 7,
        name: "Acupuncture Pen",
        description: "Electronic acupuncture pen that delivers gentle electrical stimulation to acupuncture points, offering a needle-free approach to pain relief, relaxation, and energy flow improvement.",
        image: imgAcupuncturePen
    },
    {
        id: 8,
        name: "Balance Ball 58cm",
        description: "Anti-burst exercise ball used for core strengthening, balance training, posture improvement, and active sitting, suitable for physiotherapy, fitness, and rehabilitation programs.",
        image: imgBalanceBall
    },
    {
        id: 9,
        name: "Comfy TENS Physiotherapy Machine",
        description: "User-friendly TENS unit designed for comfortable home and clinical use, offering adjustable stimulation modes to effectively manage acute and chronic pain conditions.",
        image: imgComfyTens
    },
    {
        id: 10,
        name: "Digital Cervical and Lumbar Traction Machine",
        description: "Motorised traction device for cervical and lumbar spine decompression, reducing nerve compression, disc herniation pain, and stiffness through controlled mechanical stretching.",
        image: imgDigitalCervical
    },
    {
        id: 11,
        name: "Dumbbell 1kg",
        description: "Lightweight 1kg dumbbell with ergonomic grip, suitable for early-stage physiotherapy exercises, wrist strengthening, and upper limb rehabilitation protocols.",
        image: imgDumbbell1kg
    },
    {
        id: 12,
        name: "Dumbbell 3kg",
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
        description: "Single-section electric therapy bed with motorised height adjustment, providing a stable and comfortable treatment surface for manual therapy and physiotherapy procedures.",
        image: imgElectricBedSingle
    },
    {
        id: 15,
        name: "Electronic Acupuncture Stimulator Machine",
        description: "Multi-channel electronic acupuncture stimulator that applies precise electrical impulses to acupuncture and trigger points, promoting pain relief and muscle relaxation.",
        image: imgElectronicAcupuncture
    },
    {
        id: 16,
        name: "Evetor EFIT-533F Exercise Bike",
        description: "Compact stationary exercise bike with adjustable resistance, designed for cardiovascular conditioning, lower limb rehabilitation, and endurance training in clinical and home settings.",
        image: imgEvetorBike
    },
    {
        id: 17,
        name: "Exercise Resistance Band (Sports Band)",
        description: "Elastic resistance band ideal for strength training, stretching, and rehabilitation exercises, helping improve muscle strength, flexibility, and joint stability for all fitness levels.",
        image: imgExerciseBand
    },
    {
        id: 18,
        name: "Foldable Physiotherapy Exercise Bed",
        description: "Space-saving treatment bed designed for clinics and home visits, offering a sturdy and comfortable surface for manual therapy, exercise, and patient assessment.",
        image: imgFoldableBed
    },
    {
        id: 19,
        name: "Folding Pedal Exerciser",
        description: "Compact folding pedal exerciser for seated upper and lower limb cycling, improving circulation, joint mobility, and muscle strength in elderly and post-stroke patients.",
        image: imgFoldingPedal
    },
    {
        id: 20,
        name: "Full Spine Anatomical Model",
        description: "Life-size full spine model showing vertebrae, discs, and pelvis, perfect for teaching posture, spinal disorders, and treatment plans to patients and students.",
        image: imgFullSpine
    },
    {
        id: 21,
        name: "Hand Joint Model",
        description: "Detailed anatomical hand model showing bones, joints, and ligaments, ideal for patient education on hand injuries, arthritis, and post-surgical rehabilitation planning.",
        image: imgHandJoint
    },
    {
        id: 22,
        name: "Hydraulic Home Fitness Stepper with Handle",
        description: "Hydraulic mini stepper with adjustable resistance and stabilising handle bar, providing low-impact cardiovascular and lower limb strengthening workouts for home use.",
        image: imgHydraulicStepper
    },
    {
        id: 23,
        name: "Infrared Heat Lamp with Controller",
        description: "Infrared heat lamp with adjustable controller, delivering focused therapeutic warmth to relieve muscle tension, joint pain, and improve local circulation.",
        image: imgInfraredController
    },
    {
        id: 24,
        name: "Infrared Stand 275W with Timer & Regulator",
        description: "Height-adjustable infrared stand with 275-watt bulb, built-in timer, and intensity regulator, providing controlled heat therapy for pain relief and muscle relaxation.",
        image: imgInfraredStand275
    },
    {
        id: 25,
        name: "Kinesiology Sports Tape",
        description: "Elastic kinesiology tape that supports muscles and joints without limiting movement, helps reduce pain, swelling, and speeds recovery during sports and daily activities.",
        image: imgKinesiologyTape
    },
    {
        id: 26,
        name: "Knee Joint Anatomy Model",
        description: "Detailed knee joint model showing bones, ligaments, and cartilage, ideal for explaining injuries like ACL tears, osteoarthritis, and post-surgery rehab protocols.",
        image: imgKneeJoint
    },
    {
        id: 27,
        name: "LHC Brand Digital Interferential Therapy Machine",
        description: "LHC digital interferential therapy unit that uses medium-frequency alternating currents to penetrate deep tissues, relieving pain and reducing muscle spasm effectively.",
        image: imgLHCInterferential
    },
    {
        id: 28,
        name: "LHC-101 TENS + MS Combination Physiotherapy Machine",
        description: "Combination TENS and muscle stimulation device from LHC, offering dual-therapy capability for simultaneous pain relief and motor point stimulation in one compact unit.",
        image: imgLHCTensMs
    },
    {
        id: 29,
        name: "Manual Exercise Bed (SS & MS Frame)",
        description: "Durable manual exercise bed made with stainless steel and mild steel, designed for therapeutic exercises, stretching, and patient positioning in physiotherapy settings.",
        image: imgManualBed
    },
    {
        id: 30,
        name: "Massage Gun",
        description: "High-frequency percussion massage gun with multiple interchangeable heads, delivering deep tissue vibration therapy to relieve soreness, improve recovery, and reduce muscle stiffness.",
        image: imgMassageGun
    },
    {
        id: 31,
        name: "Mini Human Skeleton Model",
        description: "Portable skeleton model with key bones and joints, excellent for basic anatomical teaching, clinic demonstrations, and patient education in physiotherapy practice.",
        image: imgMiniSkeleton
    },
    {
        id: 32,
        name: "Mini Shockwave Therapy Machine",
        description: "Compact extracorporeal shockwave device used to relieve chronic muscle and tendon pain, promote tissue healing, and support faster recovery in sports and orthopaedic rehab.",
        image: imgMiniShockwave
    },
    {
        id: 33,
        name: "Mini T.E.N.S. Two Channel Physiotherapy Machine",
        description: "Portable dual-channel TENS unit for on-the-go pain relief, featuring adjustable intensity settings and multiple waveforms suitable for both acute and chronic pain management.",
        image: imgMiniTens
    },
    {
        id: 34,
        name: "Muscle Stimulator-Dt (Model LNC-225)",
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
        description: "Rehabilitation robotic hand device assisting active and passive finger and hand movements, helping patients regain strength, coordination, and functional use after stroke or nerve injury.",
        image: imgRoboticHand
    },
    {
        id: 41,
        name: "SONOPOWER-003 Digital Ultrasonic Therapy Machine",
        description: "Digital ultrasound therapy machine delivering precise therapeutic ultrasound for tissue heating, pain relief, and soft tissue healing at 1MHz frequency.",
        image: imgSonopowerDig003
    },
    {
        id: 42,
        name: "SONOPOWER-004 Digital Ultrasonic Therapy Machine",
        description: "Advanced digital ultrasound therapy device with dual frequency modes, offering enhanced deep tissue penetration for faster healing and effective pain management.",
        image: imgSonopowerDig004
    },
    {
        id: 43,
        name: "Shockwave Therapy Machine (Alternate Model)",
        description: "Alternate ESWT shockwave system for non-invasive musculoskeletal pain treatment, ideal for calcific tendinitis, heel spur, and chronic soft tissue disorders.",
        image: imgShockwaveAlt
    },
    {
        id: 44,
        name: "Shortwave Diathermy Therapy Machine",
        description: "Shortwave therapy device delivering deep heat to muscles and joints, used to reduce pain, stiffness, and muscle spasm in physiotherapy and rehabilitation clinics.",
        image: imgShortwaveDiathermy
    },
    {
        id: 45,
        name: "Shortwave Diathermy (SWD) Bulb 250 and 500 Watt",
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
        description: "1MHz therapeutic ultrasound device for targeted deep tissue treatment, improving blood flow, reducing scar tissue, and accelerating musculoskeletal healing.",
        image: imgSonopower1mz
    },
    {
        id: 48,
        name: "Sonopower Therapy 1 and 3 MHz",
        description: "Dual-frequency ultrasound therapy machine supporting both 1MHz and 3MHz modes, offering versatile depth control for treating superficial and deep tissue conditions.",
        image: imgSonopower13mz
    },
    {
        id: 49,
        name: "Spiky Tactile Balance Cushion",
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
        description: "Versatile electrical stimulation unit combining TENS, EMS, and interferential current modes for comprehensive pain management and neuromuscular rehabilitation in clinic settings.",
        image: imgStimpower
    },
    {
        id: 52,
        name: "TENS Machine Pin Pad",
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
        description: "Full-size human skeleton model with highlighted nerve pathways, ideal for teaching neuroanatomy, explaining nerve compression syndromes, and demonstrating rehabilitation strategies.",
        image: imgAnatomicalSkeleton
    },
    {
        id: 57,
        name: "Ankle Joint Model",
        description: "Detailed ankle joint anatomical model displaying bones, ligaments, and tendons, ideal for explaining ankle sprains, fractures, and rehabilitation procedures to patients.",
        image: imgAnkleJoint
    },
    {
        id: 58,
        name: "Ballistic Extracorporeal Shock Wave Therapy (ESWT) Machine",
        description: "Ballistic ESWT machine delivering high-energy shockwaves to break down calcifications, stimulate tissue regeneration, and treat chronic tendinopathies and plantar fasciitis.",
        image: imgBallisticESWT
    },
    {
        id: 59,
        name: "Cervical Spine Anatomical Models",
        description: "Detailed cervical spine model with individual vertebrae, intervertebral discs, and nerve roots, essential for explaining cervical disc herniation and nerve compression to patients.",
        image: imgCervicalSpine
    },
    {
        id: 60,
        name: "Dumbbell 2kg",
        description: "Lightweight 2kg dumbbell suitable for progressive resistance exercises, early-stage upper limb rehabilitation, and strength conditioning under physiotherapy supervision.",
        image: imgDumbbell2kg
    },
    {
        id: 61,
        name: "Dumbbell 5kg",
        description: "5kg dumbbell for intermediate resistance training and upper limb strengthening, suitable for progressive rehabilitation and functional fitness programs.",
        image: imgDumbbell5kg
    },
    {
        id: 62,
        name: "Hernia Discal Model",
        description: "Educational model demonstrating intervertebral disc herniation and nerve root compression, helping physiotherapists explain spinal pathology and treatment rationale to patients.",
        image: imgHerniaDiscal
    },
    {
        id: 63,
        name: "Infrared Heat Therapy Lamp with Stand 275W",
        description: "275-watt infrared heat therapy lamp on adjustable stand, providing targeted deep heat treatment for muscle aches, joint pain, and improved local blood circulation.",
        image: imgInfraredLampStand
    },
    {
        id: 64,
        name: "Lumbar Spine Anatomy Model",
        description: "Life-size lumbar spine model showing vertebrae, discs, and sacrum, perfect for patient education on lower back pain, disc disorders, and lumbar rehabilitation protocols.",
        image: imgLumbarSpine
    },
    {
        id: 65,
        name: "Patient Examination Bed",
        description: "Sturdy patient examination bed with easy-clean upholstery and stable frame, providing a safe and comfortable surface for clinical assessments and physiotherapy examinations.",
        image: imgPatientBed
    },
    {
        id: 66,
        name: "Pelvis Spine Model",
        description: "Anatomical pelvis and lumbar spine model illustrating sacroiliac joints, disc levels, and pelvic alignment, essential for explaining posture disorders and low back conditions.",
        image: imgPelvisSpine
    },
    {
        id: 67,
        name: "Peanut Ball",
        description: "Peanut-shaped exercise ball providing enhanced stability for Pilates, yoga, and physiotherapy exercises, reducing rolling tendency for improved balance and core strengthening.",
        image: imgPenutBall
    },
    {
        id: 68,
        name: "Pulse Cold Compression Therapy Machine",
        description: "Integrated cold compression therapy system combining adjustable pneumatic compression with cryotherapy to control swelling, reduce pain, and accelerate post-injury or post-surgical recovery.",
        image: imgPulseCold
    },
    {
        id: 69,
        name: "rTMS Brain Therapy Machine",
        description: "Repetitive Transcranial Magnetic Stimulation system delivering non-invasive magnetic pulses to targeted brain areas, supporting treatment of neurological and psychiatric conditions under medical supervision.",
        image: imgRTMS
    }
];

const Products = () => {
    return (
        <div className="products-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Products</h1>
                    <p>Explore our wide range of physiotherapy equipment</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="products-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="catalog-note">
                        <p>Don't see what you're looking for?</p>
                        <p className="sub-note">We have a vast inventory. Contact us for specific requirements.</p>
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
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
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
