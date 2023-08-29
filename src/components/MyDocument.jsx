import React from 'react';
import { Page, pdf, Text, View, Document, StyleSheet,Link } from '@react-pdf/renderer';
import OriginalLayout from './pdflayouts/OriginalLayout';
import ModernLayout from './pdflayouts/ModernLayout';
import SidebarLayout from './pdflayouts/SidebarLayout';


const MyDocument = (props) => {
    let Layout;
    switch (props.layoutType) {
        case 'modern':
            Layout = ModernLayout;
            break;
        case 'sidebar':
            Layout = SidebarLayout;
            break;
        default:
            Layout = OriginalLayout;
    }

    return (
        <Document>
            <Layout {...props} />
        </Document>
    );
};

MyDocument.defaultProps = {
    data: {
        firstname: '',
        lastname: ''
    },
    employmentData: [],
    educationData: [],
    skillsData: [],
    referencesData: [],
    linksData:[],
    selectedColor:[],
    layout: OriginalLayout,
};

export const generatePdfBlob = async (documentProps) => {
    return await pdf(<MyDocument {...documentProps} />).toBlob();
}

export default MyDocument;
