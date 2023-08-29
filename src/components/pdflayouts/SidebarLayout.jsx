// SidebarLayout.jsx
import React from 'react';
import { Text, View, Link, StyleSheet, Page } from '@react-pdf/renderer';

const SidebarLayout = ({ 
    data, skillsData, employmentData, educationData, referencesData, linksData, selectedColor 
}) => {
    const styles = StyleSheet.create({
        
        header: {
            flexDirection: 'column',
            alignItems: 'center',
            borderBottomWidth: 2,
            borderBottomColor: '#112131',
            marginBottom: 10,
        },
        name: {
            fontSize: 40,
            fontWeight: 'bold',
            color: 'black',
        },
        contact: {
            fontSize: 12,
            color: 'black',
            marginVertical: 2,
        },
        section: {
            padding: 8,
            backgroundColor: 'white',
            borderRadius: 6,
            marginVertical: 5,
        },
        itemTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#3498DB',
            marginBottom: 6,
        },
        itemData: {
            fontSize: 12,
            color: '#7F8C8D',
            marginBottom: 4,
        },
        skillRow: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 5
        },
        skillLabel: {
            flex: 1,
            fontWeight: 'bold'
        },
        dotsContainer: {
            flexDirection: 'row',
            marginLeft: 10
        },
        dot: {
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 2
        },
        activeDot: {
            backgroundColor: 'black'
        },
        inactiveDot: {
            backgroundColor: 'grey'
        },
        referenceItem: {
            marginBottom: 4,
        },
        referenceName: {
            fontWeight: 'bold',
            fontSize: 14,  // Highlight reference names
        },
        referenceDetail: {
            fontSize: 12,
            color: '#7F8C8D',
        },

        page: {
            flexDirection: 'row', // To create main and sidebar sections
            backgroundColor: '#F8F8F8',
            padding: 10,
        },
        mainSection: {
            flex: 3, // This is 3 times the size of sidebar
            paddingRight: 10,
        },
        sidebar: {
            flex: 1,
            paddingLeft: 10,
        },
    });

    return (
        <Page size="A4" style={{ ...styles.page, backgroundColor: selectedColor || styles.page.backgroundColor }}>
            {/* Main Content */}
            <View style={styles.mainSection}>
                <View style={styles.header}>
                    <Text style={styles.name}>{data.firstname} {data.lastname}</Text>
                    <Text style={styles.contact}>{data.email}</Text>
                    <Text style={styles.contact}>{data.phone}</Text>
                    <Text style={styles.contact}>{data.country}, {data.city}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.itemTitle}>Professional Summary</Text>
                    <Text style={styles.itemData}>{data.summary}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.itemTitle}>Skills</Text>
                    {skillsData.map((skill, index) => (
                        <View key={index} style={styles.skillRow}>
                            <Text style={styles.skillLabel}>{skill.name}</Text>
                            <View style={styles.dotsContainer}>
                                {[...Array(10)].map((_, i) => (
                                    <View 
                                        key={i} 
                                        style={[
                                            styles.dot, 
                                            i < skill.proficiency ? styles.activeDot : styles.inactiveDot
                                        ]}
                                    />
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.itemTitle}>Employment History</Text>
                    {employmentData.slice(0, 2).map((employment, index) => (
                        <View key={index}>
                            <Text style={styles.itemData}>{employment.startTime} - {employment.currentlyEmployed ? "Present" : employment.endTime}</Text>
                            <Text style={styles.itemData}>{employment.jobTitle} at {employment.employer}</Text>
                            <Text style={styles.itemData}>{employment.description}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.itemTitle}>Education</Text>
                    {educationData.slice(0, 2).map((education, index) => (
                        <View key={index}>
                            <Text style={styles.itemData}>{education.degree} at {education.institution}</Text>
                            <Text style={styles.itemData}>From {education.startYear} to {education.currentlyStudying ? "Present" : education.endYear}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Sidebar */}
            <View style={styles.sidebar}>
                <View style={styles.section}>
                    <Text style={styles.itemTitle}>References</Text>
                    {referencesData.slice(0, 2).map((reference, index) => (
                        <View key={index} style={styles.referenceItem}>
                            <Text style={styles.referenceName}>{reference.name}</Text>
                            <Text style={styles.referenceDetail}>{reference.phone}</Text>
                            <Text style={styles.referenceDetail}>{reference.email}</Text>
                        </View>
                    ))}
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
        </Page>
    );
}

export default SidebarLayout;
