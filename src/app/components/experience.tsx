'use client'

import { ChevronDown } from 'lucide-react';
import React, { useRef } from "react";

export function Experience() {

    const details:any = useRef(null);

    function handleChange(checkbox: any) {
        if(checkbox.target.checked){
            details.current ? details.current['style']['maxHeight'] = details.current['scrollHeight']+'px' : '';
        }else{
            details.current ? details.current['style']['maxHeight'] = '0px' : '';
        }
    }

    return (
        <div className="space-y-10">
            <h1 className="text-4xl text-sky-200 text-center font-bold tracking-wider">My Experience</h1>
            <div className="border-l-4 border-sky-300 pl-9 space-y-12">
                <div className="relative space-y-2">
                    <span className="absolute top-0 -left-12 bg-sky-300 w-5 h-5 rounded-full"></span>
                    <h2 className="text-lg font-semibold text-white tracking-wide">Tifim Crédito Consignado</h2>
                    <h3 className="font-semibold text-zinc-300">Jul/2021 - Today</h3>
                    <div className="flex flex-col bg-zinc-400 rounded-lg pt-4 gap-1">
                        <p className="px-4 text-justify font-semibold text-zinc-900">Development and maintenance of a CRM system for the  consigned credit sales sector. 
                            The system is a web system with MVC architecture, developed in
                            PHP and using SQL Server as database.
                        </p>
                        <ul ref={details} className="list-disc list-inside px-4 max-h-0 overflow-hidden transition-all duration-700">
                            <li>Maintenance and improvements of the pages and functions;</li>
                            <li>Implementation of real-time chat and notifications using the Socket.io library;</li>
                            <li>Implementation of HR control;</li>
                            <li>Implementation of accounts payable and receivable control;</li>
                            <li>Manipulation and insertion of mailing data into SQL Server database.</li>
                        </ul>
                        <div className="relative flex justify-center font-semibold text-zinc-700 p-2 rounded-b-lg w-full hover:bg-zinc-500/50 gap-2">
                            Details
                            <input onChange={(e) => handleChange(e)} type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-full opacity-0 z-10 cursor-pointer"/>
                            <ChevronDown className="transition-transform duration-500 rotate-0 peer-checked:-rotate-180"/>
                        </div>
                    </div>
                    <div className="inline-flex gap-4 items-center w-full pt-2 text-zinc-300">
                        <h3 className="font-semibold">Main Technologies:</h3>
                        <p>HTML/CSS, PHP, Javascript, JQuery, Node.js, SQL Server.</p>
                    </div>
                </div>
                <div className="relative space-y-2">
                    <span className="absolute top-0 -left-12 bg-white w-5 h-5 rounded-full border-4 border-sky-300"></span>
                    <h2 className="text-lg font-semibold text-white tracking-wide">IBM</h2>
                    <h3 className="font-semibold text-zinc-300">Abr/2016 - Fev/2021</h3>
                    <p className="font-semibold text-justify bg-zinc-400 p-4 rounded-lg text-zinc-900">
                        Software purchase order processing, SAP dispute processing and
                        vendor support. Using Agile methodology.
                        In addition to my main roles, I&apos;ve been involved in automation projects
                        in Python and RPA.
                    </p>
                    <div className="inline-flex gap-4 items-center w-full pt-2 text-zinc-300">
                        <h3 className="font-semibold">Main Technologies:</h3>
                        <p>Python, Blue Prism RPA.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}