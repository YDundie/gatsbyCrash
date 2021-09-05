import React from "react"
import Layout from '../components/Layout'
import * as homeStyles from '../styles/home.module.css'
import { Link } from 'gatsby'


export default function Home() {
  return (
    <Layout>
      <section className={homeStyles.header}>
        <div>
          <h2>Design</h2>
          <h3>Devlop & Deploy</h3>
          <p>UX designer & web developer based in Sveta Marija.</p>
          <Link className={homeStyles.btn} to='/projects'>My Portfolio Projects</Link>
        </div>
      </section>
    </Layout>
  )
}
