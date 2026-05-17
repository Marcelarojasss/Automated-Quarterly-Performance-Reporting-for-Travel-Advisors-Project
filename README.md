# Protocolo Tours — Advisor Performance Reporting System

## Overview

This project is an AI-assisted advisor reporting and lifecycle management system designed for Protocolo Tours.

The goal is to help travel advisors better understand:
- their sales performance
- client retention
- repeat customers
- supplier relationships
- missed revenue opportunities

through automated quarterly reporting.

Instead of requiring advisors or management to manually analyze spreadsheets and booking history, the system automatically processes sales data and generates personalized reports for each advisor.

The project combines:
- data ingestion
- automation
- AI-generated insights
- lifecycle/customer retention thinking
- CRM-style reporting

into one scalable internal workflow.

---

# Why This Exists

Today, most advisor performance analysis is manual.

The company already has the data, but:
- insights are fragmented
- follow-up is inconsistent
- inactive clients go unnoticed
- advisors lack visibility into trends

This system is designed to turn raw operational data into actionable business intelligence.

The end goal is:
- higher client retention
- better advisor performance
- increased sales
- more scalable operations

---

# Current Data Source

All sales and client data currently lives inside Sion.

Monthly CSV exports contain:
- travel advisors
- advisor clients
- booking history
- revenue
- supplier/hotel information
- quarterly comparisons

The system is being designed so it can function:
- with direct API access (if available)
OR
- entirely through automated CSV ingestion

CSV compatibility is considered mandatory.

---

# Core Features

## 1. Inactive Client Detection
Identifies:
- clients who traveled last year
- but have not booked this year

Purpose:
- improve retention
- encourage advisor outreach
- recover lost revenue opportunities

---

## 2. Birthdate Reporting
Generates quarterly lists of:
- upcoming client birthdays

Purpose:
- relationship building
- personalized outreach
- stronger client loyalty

---

## 3. Repeat / Loyal Client Analysis
Tracks:
- repeat customers
- booking frequency
- total revenue generated

Purpose:
- identify high-value clients
- strengthen retention strategy
- improve advisor prioritization

---

## 4. Quarterly Sales Performance
Compares:
- current quarter sales
- same quarter previous year
- percentage growth/decline

Purpose:
- performance visibility
- trend analysis
- accountability

---

## 5. Supplier / Hotel Performance
Analyzes:
- top suppliers sold
- hotel revenue
- booking counts

Purpose:
- improve supplier leverage
- identify strong partnerships
- optimize sales strategy

---

# AI + Automation Layer

The system is designed to use AI tools for:
- summarizing advisor performance
- generating personalized reports
- surfacing trends
- suggesting follow-up actions
- reducing manual reporting work

Automation tools may include:
- OpenAI APIs
- Zapier / Make
- scheduled workflows
- automated email delivery

---

# Lifecycle / CRM Thinking

This project also functions as a lightweight lifecycle management system.

The logic is inspired by:
- CRM systems
- retention marketing
- lifecycle automation

The system helps advisors understand:
- who needs follow-up
- who is loyal
- who is inactive
- where revenue opportunities exist

rather than simply storing customer data.

---

# Delivery Strategy

Reports are:
- advisor-specific
- automatically generated
- delivered quarterly
- staggered over multiple days

The goal is to avoid:
- generic reporting
- dashboard overload
- ignored mass emails

Instead, the system focuses on:
- actionable insights
- personalized communication
- operational clarity

---

# Technical Direction

Potential stack:
- CSV ingestion pipelines
- Node.js / Python
- Postgres / Supabase
- OpenAI APIs
- scheduled jobs
- email automation
- internal reporting workflows

The architecture is intentionally flexible to support:
- future API integrations
- scaling advisor volume
- AI-native workflows
- future CRM integrations

---

# Long-Term Vision

The long-term vision is to create:
- a scalable advisor intelligence system
- operational visibility across the business
- automated retention workflows
- AI-assisted reporting infrastructure

that helps modernize travel advisor operations while improving both advisor performance and customer retention.
