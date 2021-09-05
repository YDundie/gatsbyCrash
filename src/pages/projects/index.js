import React from 'react'
import Layout from '../../components/Layout';
import * as projectStyles from '../../styles/projects.module.css'

export default function Projects() {
    return (
        <Layout>
            <div className={projectStyles.portfolio}>
                <h2>Projects</h2>
                <h3>Project & Websites I've created.</h3>
            </div>
        </Layout>
    )
}
