import React, { useState } from 'react';
import Logo from '../images/Resolution_logo.png';
import axios from 'axios';

function Service_report() {
    const [formData, setFormData] = useState({
        customerDetails: {
            name: '',
            address: '',
            email: '',
            gstNo: '',
            serviceNumber: '',
            serviceCharge: '',
            phone: '',
            mobile: ''
        },
        serviceDetails: {
            brand: '',
            device: '',
            model: '',
            serialNumber: '',
            tested: '',
            serviceType: ''
        },
        voltageAndStatus: {
            inputVoltage: '',
            controlVoltage: '',
            supplyStatus: '',
            voltageArea: ''
        },
        details: {
            details: '',
            reason: '',
            problemDuringVisit: '',
            solution: '',
            remarks: ''
        },
        engineerAndRepresentative: {
            engineerName: '',
            engineerMobile: '',
            representativeName: '',
            representativeMobile: ''
        },
        signatures: {
            customerName: '',
            serviceBy: '',
            dateTime: ''
        }
    });
    const handleChange = (section, field, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [section]: {
                ...prevState[section],
                [field]: value
            }
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();  // Prevent the default form submission behavior
    
        try {
            // Send the form data to your backend via POST request
            const response = await axios.post('https://resolutionproject-git-main-tanvi-patels-projects.vercel.app/submit', formData);
            
            // Handle successful submission
            console.log('Form Data submitted successfully:', response.data);
            alert('Form submitted successfully!');  
        } catch (error) {
            // Handle error in submission
            console.error('Error submitting form data:', error);
            alert('Failed to submit form');
        }
    };
    return (
        <div>
            <header className="text-center py-3">
                <img src={Logo} alt="logo" style={{ maxWidth: '200px' }} />
            </header>
            <section className="container mt-4">
                <h1 className="text-center mb-4">Service Report</h1>
                <form
                    className="p-4 border rounded shadow-sm bg-light"
                    onSubmit={handleSubmit}
                >
                    {/* Customer Details */}
                    <h4 className="mb-3">Customer Details</h4>
                    <div className="mb-3">
                        <label className="form-label">Name of the Customer</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Customer Name"
                            value={formData.customerDetails.name}
                            onChange={(e) =>
                                handleChange('customerDetails', 'name', e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Address"
                            value={formData.customerDetails.address}
                            onChange={(e) =>
                                handleChange('customerDetails', 'address', e.target.value)
                            }
                        />
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email"
                                value={formData.customerDetails.email}
                                onChange={(e) =>
                                    handleChange('customerDetails', 'email', e.target.value)
                                }
                            />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">GST No</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter GST No"
                                value={formData.customerDetails.gstNo}
                                onChange={(e) =>
                                    handleChange('customerDetails', 'gstNo', e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div className="col-lg-6">
                            <label className="form-label">Service Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Service Number"
                                value={formData.customerDetails.serviceNumber}
                                onChange={(e) =>
                                    handleChange('customerDetails', 'serviceNumber', e.target.value)
                                }
                            />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Service Charge</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter Service Charge"
                                value={formData.customerDetails.serviceCharge}
                                onChange={(e) =>
                                    handleChange('customerDetails', 'serviceCharge', e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div className="col-lg-6">
                            <label className="form-label">Phone No</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Phone No"
                                value={formData.customerDetails.phone}
                                onChange={(e) =>
                                    handleChange('customerDetails', 'phone', e.target.value)
                                }
                            />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Mobile No</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter Mobile No"
                                value={formData.customerDetails.mobile}
                                onChange={(e) =>
                                    handleChange('customerDetails', 'mobile', e.target.value)
                                }
                            />
                        </div>
                    </div>

                    {/* Service Details */}
                    <h4 className="my-4">Service Details</h4>
                    <div className="row g-3">
                        <div className="col-lg-4">
                            <label className="form-label">Brand</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Brand"
                                value={formData.serviceDetails.brand}
                                onChange={(e) =>
                                    handleChange('serviceDetails', 'brand', e.target.value)
                                }
                            />
                        </div>
                        <div className="col-lg-4">
                            <label className="form-label">Device</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Device"
                                value={formData.serviceDetails.device}
                                onChange={(e) =>
                                    handleChange('serviceDetails', 'device', e.target.value)
                                }
                            />
                        </div>
                        <div className="col-lg-4">
                            <label className="form-label">Model</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Model"
                                value={formData.serviceDetails.model}
                                onChange={(e) =>
                                    handleChange('serviceDetails', 'model', e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Serial Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Serial Number"
                            value={formData.serviceDetails.serialNumber}
                            onChange={(e) =>
                                handleChange('serviceDetails', 'serialNumber', e.target.value)
                            }
                        />
                    </div>
                    <div className="row g-3 mt-3">
                        <div className="col-lg-6">
                            <label className="form-label">Tested</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tested Status"
                                value={formData.serviceDetails.tested}
                                onChange={(e) =>
                                    handleChange('serviceDetails', 'tested', e.target.value)
                                }
                            />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Service Type</label>
                            <select
                                className="form-select"
                                value={formData.serviceDetails.serviceType}
                                onChange={(e) =>
                                    handleChange('serviceDetails', 'serviceType', e.target.value)
                                }
                            >
                                <option value="">Select Service Type</option>
                                <option value="Automation">Automation</option>
                                <option value="Maintenance">Maintenance</option>
                            </select>
                        </div>
                    </div>

                    {/* Voltage and Status */}
                    <h4 className="my-4">Voltage and Status</h4>
                    <div className="row g-3">
                        <div className="col-lg-6">
                            <label className="form-label">Input Voltage</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Input Voltage"
                                value={formData.voltageAndStatus.inputVoltage}
                                onChange={(e) =>
                                    handleChange('voltageAndStatus', 'inputVoltage', e.target.value)
                                }
                            />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Control Voltage</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Control Voltage"
                                value={formData.voltageAndStatus.controlVoltage}
                                onChange={(e) =>
                                    handleChange('voltageAndStatus', 'controlVoltage', e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div className="col-lg-6">
                            <label className="form-label">Input Supply Status</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Supply Status"
                                value={formData.voltageAndStatus.supplyStatus}
                                onChange={(e) =>
                                    handleChange('voltageAndStatus', 'supplyStatus', e.target.value)
                                }
                            />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Voltage Area</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Voltage Area"
                                value={formData.voltageAndStatus.voltageArea}
                                onChange={(e) =>
                                    handleChange('voltageAndStatus', 'voltageArea', e.target.value)
                                }
                            />
                        </div>
                    </div>

                    {/* Details Section */}
                    <h4 className="my-4">Details</h4>
                    <div className="mb-3">
                        <label className="form-label">Details</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Enter Details"
                            value={formData.details.details}
                            onChange={(e) =>
                                handleChange('details', 'details', e.target.value)
                            }
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Reason</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Enter Reason"
                            value={formData.details.reason}
                            onChange={(e) =>
                                handleChange('details', 'reason', e.target.value)
                            }
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Problem During Visit</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Enter Problem"
                            value={formData.details.problemDuringVisit}
                            onChange={(e) =>
                                handleChange('details', 'problemDuringVisit', e.target.value)
                            }
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Solution</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Enter Solution"
                            value={formData.details.solution}
                            onChange={(e) =>
                                handleChange('details', 'solution', e.target.value)
                            }
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Remarks</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Enter Remarks"
                            value={formData.details.remarks}
                            onChange={(e) =>
                                handleChange('details', 'remarks', e.target.value)
                            }
                        ></textarea>
                    </div>

                    {/* Engineer and Representative Section */}
                    <h4 className="my-4">Engineer and Representative</h4>
                    <div className="row g-3">
                        <div className="col-lg-6">
                            <label className="form-label">Name of Engineer Visit</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Engineer Name"
                                value={formData.engineerAndRepresentative.engineerName}
                                onChange={(e) =>
                                    handleChange('engineerAndRepresentative', 'engineerName', e.target.value)
                                }
                            />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Engineer Mobile No</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Mobile No"
                                value={formData.engineerAndRepresentative.engineerMobile}
                                onChange={(e) =>
                                    handleChange('engineerAndRepresentative', 'engineerMobile', e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="row g-3 mt-3">
                        <div className="col-lg-6">
                            <label className="form-label">Name of Representative</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Representative Name"
                                value={formData.engineerAndRepresentative.representativeName}
                                onChange={(e) =>
                                    handleChange('engineerAndRepresentative', 'representativeName', e.target.value)
                                }
                            />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-label">Representative Mobile No</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Mobile No"
                                value={formData.engineerAndRepresentative.representativeMobile}
                                onChange={(e) =>
                                    handleChange('engineerAndRepresentative', 'representativeMobile', e.target.value)
                                }
                            />
                        </div>
                    </div>

                    {/* Signature Section */}
                    <h4 className="my-4">Signatures</h4>
                    <div className="row g-3">
                        {/* Customer Signature */}
                        <div className="col-lg-6">
                            <label className="form-label">Customer's Name & Sign</label>
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Enter Customer Name"
                                value={formData.signatures.customerName}
                                onChange={(e) =>
                                    handleChange('signatures', 'customerName', e.target.value)
                                }
                            />
                            <canvas
                                className="border"
                                style={{ width: '100%', height: '100px', borderRadius: '5px' }}
                                id="customerSignatureCanvas">
                            </canvas>
                            <small className="text-muted">Sign here (use mouse or touch).</small>
                        </div>

                        {/* Date & Time */}
                        <div className="col-lg-6">
                            <label className="form-label">Date & Time</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                value={formData.signatures.dateTime}
                                onChange={(e) =>
                                    handleChange('signatures', 'dateTime', e.target.value)
                                }
                            />
                        </div>
                    </div>

                    {/* Service By Signature */}
                    <div className="mt-3">
                        <label className="form-label">Service By</label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Enter Service Provider Name"
                            value={formData.signatures.serviceBy}
                            onChange={(e) =>
                                handleChange('signatures', 'serviceBy', e.target.value)
                            }
                        />
                        <canvas
                            className="border"
                            style={{ width: '100%', height: '100px', borderRadius: '5px' }}
                            id="serviceBySignatureCanvas">
                        </canvas>
                        <small className="text-muted">Sign here (use mouse or touch).</small>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-4">
                        <button
                            type="submit"
                            className="btn btn-primary px-4 py-2"

                        >
                            Submit Report
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Service_report;
