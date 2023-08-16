import React from 'react';
import { Page, pdf, Text, View, Document, StyleSheet,Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#EAEDED',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: '#112131',
        marginBottom: 20,
    },
    name: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#2C3E50',
    },
    section: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        shadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginVertical: 6
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3498DB',
        marginBottom: 8,
    },
    itemData: {
        fontSize: 14,
        color: '#7F8C8D',
        marginBottom: 4,
    },
    skillItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    skillLabel: {
        fontSize: 14,
        color: '#34495E',
        marginRight: 8,
    },
    skillValue: {
        fontSize: 50,
        color: '#3498DB',
        flexShrink: 0,
    },
    referenceItem: {
        marginBottom: 6,
    },
    referenceName: {
        fontSize: 16,
        fontWeight: 'semi-bold',
        color: '#2C3E50',
    },
    referenceDetail: {
        marginTop: 2,
        fontSize: 12,
        color: '#7F8C8D',
    }
});

const MyDocument = ({ data, employmentData, educationData, skillsData, referencesData,linksData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.name}>{data.firstname} {data.lastname}</Text>
                <View style={{ alignSelf: 'flex-end' }}>
                    <Text style={styles.itemData}>{data.email}</Text>
                    <Text style={styles.itemData}>{data.phone}</Text>
                    <Text style={styles.itemData}>{data.country}, {data.city}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.itemTitle}>Links</Text>
                    {linksData.map((link, index) => (
                        <View key={index} style={styles.referenceItem}>
                            <Text style={styles.referenceName}>{link.label}</Text>
                            <Link src={link.url} style={styles.referenceDetail}>{link.url}</Link>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.itemTitle}>Professional Summary</Text>
                <Text style={styles.itemData}>{data.summary}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.itemTitle}>Skills</Text>
                {skillsData.map((skill, index) => (
                    <View key={index} style={styles.skillItem}>
                        <Text style={styles.skillLabel}>{skill.name}</Text>
                        <Text style={styles.skillValue}>
                            {".".repeat(skill.proficiency) + " ".repeat(10 - skill.proficiency)}
                        </Text>
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.itemTitle}>Employment History</Text>
                {employmentData.slice(0, 2).map((employment, index) => ( // Show only top 2 experiences for space
                    <View key={index}>
                        <Text style={styles.itemData}>{employment.description}</Text>
                        <Text style={styles.itemData}>{employment.jobTitle} at {employment.employer}</Text>
                        <Text style={styles.itemData}>{employment.startTime} - {employment.currentlyEmployed ? "Present" : employment.endTime}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.itemTitle}>Education</Text>
                {educationData.slice(0, 2).map((education, index) => (  // Show only top 2 educations for space
                    <View key={index}>
                        <Text style={styles.itemData}>{education.degree} at {education.institution}</Text>
                        <Text style={styles.itemData}>From {education.startYear} to {education.currentlyStudying ? "Present" : education.endYear}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.section}>
                <Text style={styles.itemTitle}>References</Text>
                {referencesData.slice(0, 2).map((reference, index) => (  // Show only top 2 references for space
                    <View key={index} style={styles.referenceItem}>
                        <Text style={styles.referenceName}>{reference.name}</Text>
                        <Text style={styles.referenceDetail}>{reference.phone}</Text>
                        <Text style={styles.referenceDetail}>{reference.email}</Text>
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
    educationData: [],
    skillsData: [],
    referencesData: [],
    linksData:[]
};

export const generatePdfBlob = async (documentProps) => {
    return await pdf(<MyDocument {...documentProps} />).toBlob();
}

export default MyDocument;
