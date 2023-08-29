import React from 'react';
import { Text, View, Link, StyleSheet, Page } from '@react-pdf/renderer';

const ModernLayout = ({ 
    data, skillsData, employmentData, educationData, referencesData, linksData, selectedColor,textColor
}) => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: selectedColor || '#F8F8F8',
        },
        sidebar: {
            flex: 1,
            backgroundColor: selectedColor || '#2C3E50',
            padding: 10,
            flexDirection: 'column',
            color: textColor || 'black',
        },
        mainContent: {
            flex: 2,
            padding: 10,
            flexDirection: 'column',
            color: textColor || 'black',
        },
        name: {
            fontSize: 28,
            fontWeight: 'bold',
            color: textColor || 'black',
            marginBottom: 8,
        },
        contact: {
            fontSize: 12,
            color: textColor || 'black',
            marginBottom: 8,
        },
        sidebarTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: textColor || 'black',
            marginBottom: 4,
        },
        sidebarData: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 6,
            color: textColor || 'black',
        },
        skillName: {
            fontSize: 12,
            color: textColor || 'black',
            marginRight: 8,
        },
        dot: {
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 1,
            backgroundColor: 'grey',
        },
        activeDot: {
            backgroundColor: 'white',
        },
        section: {
            padding: 8,
            backgroundColor: 'white',
            borderRadius: 6,
            marginVertical: 5,
            color: textColor || 'black',
        },
        itemTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: textColor || '#3498DB',
            marginBottom: 6,
        },
        itemData: {
            fontSize: 12,
            color: textColor || '#7F8C8D',
            marginBottom: 4,
        },
        referenceItem: {
            marginBottom: 4,
            color: textColor || 'black',
        },
        referenceName: {
            fontWeight: 'bold',
            fontSize: 14,
            color: textColor || 'black',
        },
        referenceDetail: {
            fontSize: 12,
            color: textColor || '#7F8C8D',
        }
    });

    return (
        <Page size="A4" style={styles.page}>
            {/* Sidebar */}
            <View style={styles.sidebar}>
                <Text style={styles.name}>{data.firstname} {data.lastname}</Text>
                <Text style={styles.contact}>{data.email}</Text>
                <Text style={styles.contact}>{data.phone}</Text>
                <Text style={styles.contact}>{data.country}, {data.city}</Text>
                <Text style={styles.sidebarTitle}>Skills</Text>
                {skillsData.slice(0, 5).map((skill, index) => (
                    <View key={index} style={styles.sidebarData}>
                        <Text style={styles.skillName}>{skill.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {[...Array(10)].map((_, i) => (
                                <View 
                                    key={i} 
                                    style={[
                                        styles.dot, 
                                        i < skill.proficiency ? styles.activeDot : null
                                    ]}
                                />
                            ))}
                        </View>
                    </View>
                ))}
                <Text style={styles.sidebarTitle}>Links</Text>
                {linksData.map((link, index) => (
                    <Link key={index} src={link.url} style={styles.skillName}>{link.label}</Link>
                ))}
            </View>

            {/* Main Content */}
            <View style={styles.mainContent}>
                <View style={styles.section}>
                    <Text style={styles.itemTitle}>Professional Summary</Text>
                    <Text style={styles.itemData}>{data.summary}</Text>
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
            </View>
        </Page>
    );
}

export default ModernLayout;
