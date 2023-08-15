import React from 'react';
import { Page, pdf, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#f3f3f3',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#112131',
        marginBottom: 20,
    },
    section: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginVertical: 8
    },
    content: {
        marginTop: 10,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#112131',
    },
    emailPhone: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    summary: {
        marginVertical: 10,
    },
    
    itemDataSummary: {
        marginTop: 6,
        fontSize: 14,
        color: '#444',
        textAlign: 'justify',  // for better text alignment in paragraphs
    },
    
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#112131',
    },
    itemData: {
        marginTop: 4,
        fontSize: 14,
        color: '#444',
    },
});

const MyDocument = ({ data, employmentData, educationData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.name}>{data.firstname} {data.lastname}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.itemTitle}>Professional Summary</Text>
                <View style={styles.content}>
                    <Text style={styles.itemData}>{data.summary}</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.itemTitle}>Contact</Text>
                <View style={styles.content}>
                    <View style={styles.emailPhone}>
                        <Text style={styles.itemData}>{data.email}</Text>
                        <Text style={styles.itemData}>{data.phone}</Text>
                    </View>
                    <Text style={styles.itemData}>{data.country}, {data.city}</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.itemTitle}>Employment History</Text>
                {employmentData.map((employment, index) => (
                    <View key={index} style={styles.content}>
                        <Text style={styles.itemTitle}>{employment.jobTitle}</Text>
                        <Text style={styles.itemData}>{employment.description}</Text>
                        <Text style={styles.itemData}>{employment.employer}</Text>
                        <Text style={styles.itemData}>{employment.startTime} - {employment.currentlyEmployed ? "Present" : employment.endTime}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.itemTitle}>Education</Text>
                {educationData.map((education, index) => (
                    <View key={index} style={styles.content}>
                        <Text style={styles.itemTitle}>{education.degree}</Text>
                        <Text style={styles.itemData}>{education.institution}</Text>
                        <Text style={styles.itemData}>From {education.startYear} to {education.currentlyStudying ? "Present" : education.endYear}</Text>
                    </View>
                ))}
            </View>
        </Page>
    </Document>
);

MyDocument.defaultProps = {
    data: {
        firstname: '',
        lastname: ''
    },
    employmentData: [],
    educationData: []
};

export const generatePdfBlob = async (documentProps) => {
    return await pdf(<MyDocument {...documentProps} />).toBlob();
}

export default MyDocument;
