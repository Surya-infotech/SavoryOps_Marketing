import { useMemo, useState } from 'react';
import { Card, CardContent, Chip, Divider, Stack, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import AppButton from '../components/ui/AppButton';

import setupFlow1 from '../assets/Setup Flow/1.png';
import setupFlow2 from '../assets/Setup Flow/2.png';
import setupFlow3 from '../assets/Setup Flow/3.png';
import setupFlow4 from '../assets/Setup Flow/4.png';
import setupFlow5 from '../assets/Setup Flow/5.png';
import setupFlow6 from '../assets/Setup Flow/6.png';
import setupFlow7 from '../assets/Setup Flow/7.png';
import setupFlow8 from '../assets/Setup Flow/8.png';
import setupFlow9 from '../assets/Setup Flow/9.png';
import setupFlow10 from '../assets/Setup Flow/10.png';
import setupFlow11 from '../assets/Setup Flow/11.png';
import setupFlow12 from '../assets/Setup Flow/12.png';
import setupFlow13 from '../assets/Setup Flow/13.png';
import setupFlow14 from '../assets/Setup Flow/14.png';
import setupFlow15 from '../assets/Setup Flow/15.png';
import subscriptionScreenshot17 from '../assets/Subscription/Screenshot_17.png';
import subscriptionScreenshot18 from '../assets/Subscription/Screenshot_18.png';
import subscriptionScreenshot16 from '../assets/Subscription/Screenshot_16.png';
import subscriptionScreenshot19 from '../assets/Subscription/Screenshot_19.png';
import subscriptionScreenshot1 from '../assets/Subscription/Screenshot_1.png';
import subscriptionScreenshot2 from '../assets/Subscription/Screenshot_2.png';
import subscriptionScreenshot3 from '../assets/Subscription/Screenshot_3.png';
import subscriptionScreenshot5 from '../assets/Subscription/Screenshot_5.png';
import subscriptionScreenshot6 from '../assets/Subscription/Screenshot_6.png';
import subscriptionScreenshot7 from '../assets/Subscription/Screenshot_7.png';
import subscriptionScreenshot8 from '../assets/Subscription/Screenshot_8.png';
import subscriptionScreenshot9 from '../assets/Subscription/Screenshot_9.png';
import subscriptionScreenshot10 from '../assets/Subscription/Screenshot_10.png';
import subscriptionScreenshot11 from '../assets/Subscription/Screenshot_11.png';
import subscriptionScreenshot12 from '../assets/Subscription/Screenshot_12.png';
import onboardingScreenshot1 from '../assets/Onboarding/Screenshot_1.png';
import onboardingScreenshot2 from '../assets/Onboarding/Screenshot_2.png';
import onboardingScreenshot3 from '../assets/Onboarding/Screenshot_3.png';
import onboardingScreenshot4 from '../assets/Onboarding/Screenshot_4.png';
import employeeOnboardingSignUp from '../assets/User & Employee Onboarding/Screenshot_20260426_162613_SavoryOps Employee.jpg';
import employeeOnboardingProfile from '../assets/User & Employee Onboarding/Screenshot_20260426_162642_SavoryOps Employee.jpg';
import customerOnboardingSignUp from '../assets/User & Employee Onboarding/Screenshot_20260426_162753_SavoryOps.jpg';
import customerOnboardingSignIn from '../assets/User & Employee Onboarding/Screenshot_20260426_162821_SavoryOps.jpg';
import customerOnboardingRestaurantSelect from '../assets/User & Employee Onboarding/Screenshot_20260426_162920_SavoryOps.jpg';
import orderFlowQrScanScreenshot from '../assets/Order/Screenshot_20260426_212957_SavoryOps.jpg';
import orderFlowWaiterSearchCustomerScreenshot from '../assets/Order/Screenshot_20260429_064342_SavoryOps Employee.jpg';
import orderFlowWaiterOrderDetailsScreenshot from '../assets/Order/Screenshot_20260429_064534_SavoryOps Employee.jpg';
import orderFlowAcceptanceScreenshot from '../assets/Order/Screenshot_20260429_064551_SavoryOps Employee.jpg';
import orderFlowKotGenerationScreenshot from '../assets/Order/Screenshot_20260429_064609_SavoryOps Employee.jpg';
import orderFlowAssignmentScreenshot from '../assets/Order/Screenshot_20260429_064616_SavoryOps Employee.jpg';
import orderFlowStatusShiftScreenshot from '../assets/Order/Screenshot_20260429_064645_SavoryOps Employee.jpg';
import orderFlowPreparationScreenshot from '../assets/Order/Screenshot_20260429_064816_SavoryOps Employee.jpg';
import orderFlowOrderExpansionScreenshot from '../assets/Order/Screenshot_20260429_070103_SavoryOps.jpg';
import orderFlowClosureScreenshot from '../assets/Order/Screenshot_20260429_070204_SavoryOps Employee.jpg';
import orderFlowCashierOversightScreenshot from '../assets/Order/Screenshot_20260429_070252_SavoryOps Employee.jpg';
import orderFlowPaymentProcessingScreenshot from '../assets/Order/Screenshot_20260429_070304_SavoryOps Employee.jpg';
import orderFlowInvoiceFeedbackScreenshot from '../assets/Order/Screenshot_20260429_070508_SavoryOps.jpg';
import tableReservationBranchToggleScreenshot from '../assets/Table Reservation/Screenshot_21.png';
import tableReservationOwnerAnalyticsScreenshot from '../assets/Table Reservation/Screenshot_1.png';
import tableReservationVisibilityScreenshot from '../assets/Table Reservation/Screenshot_20260429_072213_SavoryOps.jpg';
import tableReservationQuickSeatScreenshot from '../assets/Table Reservation/Screenshot_20260429_072247_SavoryOps.jpg';
import tableReservationHostRoleScreenshot from '../assets/Table Reservation/Screenshot_20260429_072446_SavoryOps Employee.jpg';
import tableReservationStatusUpdatesScreenshot from '../assets/Table Reservation/Screenshot_20260429_072455_SavoryOps Employee.jpg';
import tableReservationHistoryTrackingScreenshot from '../assets/Table Reservation/Screenshot_20260429_072512_SavoryOps Employee.jpg';
import tableReservationHostHomePageScreenshot from '../assets/Table Reservation/Screenshot_20260429_072614_SavoryOps Employee.jpg';
import landingPagePricingPlansScreenshot from '../assets/Landing Page/Screenshot_1.png';
import landingPageContactUsScreenshot from '../assets/Landing Page/Screenshot_2.png';
import landingPageLanguageSupportScreenshot from '../assets/Landing Page/Screenshot_3.png';
import superAdminScreenshot1 from '../assets/Super Admin/Screenshot_1.png';
import superAdminScreenshot2 from '../assets/Super Admin/Screenshot_2.png';
import superAdminScreenshot3 from '../assets/Super Admin/Screenshot_3.png';
import superAdminScreenshot4 from '../assets/Super Admin/Screenshot_4.png';
import superAdminScreenshot5 from '../assets/Super Admin/Screenshot_5.png';
import superAdminScreenshot6 from '../assets/Super Admin/Screenshot_6.png';
import superAdminScreenshot7 from '../assets/Super Admin/Screenshot_7.png';
import superAdminScreenshot8 from '../assets/Super Admin/Screenshot_8.png';
import superAdminScreenshot9 from '../assets/Super Admin/Screenshot_9.png';
import superAdminScreenshot10 from '../assets/Super Admin/Screenshot_10.png';
import superAdminScreenshot12 from '../assets/Super Admin/Screenshot_12.png';
import superAdminScreenshot13 from '../assets/Super Admin/Screenshot_13.png';
import superAdminScreenshot14 from '../assets/Super Admin/Screenshot_14.png';
import superAdminScreenshot15 from '../assets/Super Admin/Screenshot_15.png';
import superAdminScreenshot16 from '../assets/Super Admin/Screenshot_16.png';
import superAdminScreenshot17 from '../assets/Super Admin/Screenshot_17.png';
import superAdminScreenshot18 from '../assets/Super Admin/Screenshot_18.png';
import superAdminScreenshot19 from '../assets/Super Admin/Screenshot_19.png';
import superAdminScreenshot20 from '../assets/Super Admin/Screenshot_20.png';
import ownerScreenshot1 from '../assets/Owner/Screenshot_1.png';
import ownerScreenshot2 from '../assets/Owner/Screenshot_2.png';
import ownerScreenshot3 from '../assets/Owner/Screenshot_3.png';
import ownerScreenshot4 from '../assets/Owner/Screenshot_4.png';
import ownerScreenshot5 from '../assets/Owner/Screenshot_5.png';
import ownerScreenshot6 from '../assets/Owner/Screenshot_6.png';
import ownerScreenshot7 from '../assets/Owner/Screenshot_7.png';
import ownerScreenshot8 from '../assets/Owner/Screenshot_8.png';
import ownerScreenshot9 from '../assets/Owner/Screenshot_9.png';
import ownerScreenshot10 from '../assets/Owner/Screenshot_10.png';
import ownerScreenshot11 from '../assets/Owner/Screenshot_11.png';
import ownerScreenshot12 from '../assets/Owner/Screenshot_12.png';
import ownerScreenshot13 from '../assets/Owner/Screenshot_13.png';
import ownerScreenshot14 from '../assets/Owner/Screenshot_14.png';
import ownerScreenshot15 from '../assets/Owner/Screenshot_15.png';
import ownerScreenshot16 from '../assets/Owner/Screenshot_16.png';
import ownerScreenshot19 from '../assets/Owner/Screenshot_19.png';
import ownerScreenshot20 from '../assets/Owner/Screenshot_20.png';
import ownerScreenshot21 from '../assets/Owner/Screenshot_21.png';
import ownerScreenshot22 from '../assets/Owner/Screenshot_22.png';
import ownerScreenshot23 from '../assets/Owner/Screenshot_23.png';
import ownerScreenshot24 from '../assets/Owner/Screenshot_24.png';
import ownerScreenshot25 from '../assets/Owner/Screenshot_25.png';

const tableOfContents = [
  {
    id: 'setup-process',
    title: 'Setup Process (AWS & MongoDB)',
    children: [
      'Step 1: Database Setup (MongoDB Atlas)',
      'Step 2: AWS IAM & Security',
      'Step 3: SSL & Domain (Route 53 + ACM)',
      'Step 4: Frontend Deployment (S3 + CloudFront)',
      'Step 5: AWS SNS OTP Configuration',
      'Step 6: Backend Server Setup (EC2 + Node.js + Nginx)',
      'Step 7: Final Verification'
    ]
  },
  { id: 'intro', title: '1. Introduction' },
  {
    id: 'subscription-management',
    title: '2. Subscription Management',
    children: [
      '1. Subscription Plan Hierarchy',
      '2. Owner-Side Subscription Journey',
      '3. Super Admin Oversight & Analytics',
      '4. Plan-Based Access Gating'
    ]
  },
  {
    id: 'onboarding',
    title: '3. Onboarding (Owner, Employee, Customer)',
    children: [
      '3.1 Owner Onboarding (Tenant Setup)',
      '3.2 Employee Onboarding (Role-Based Integration)',
      '3.3 Customer Onboarding (Flexible Engagement)'
    ]
  },
  {
    id: 'order-flow',
    title: '4. Order Flow',
    children: [
      '4.1 Order Initiation',
      '4.2 Kitchen Workflow (KOT)',
      '4.3 Fulfillment and Service',
      '4.4 Billing and Payment'
    ]
  },
  {
    id: 'reservation-flow',
    title: '5. Table Reservation Flow',
    children: [
      '5.1 Feature Activation',
      '5.2 Customer Booking Methods',
      '5.3 Host and Owner Management',
      '5.4 Operational Visibility'
    ]
  },
  { id: 'landing-page', title: '6. Landing Page' },
  { id: 'super-admin', title: '7. Super Admin Panel' },
  { id: 'owner-panel', title: '8. Owner Panel' },
  { id: 'user-app', title: '9. User App' },
  { id: 'employee-app', title: '10. Employee App' }
];

function SetupFigures({ figures }) {
  if (!figures?.length) return null;
  return (
    <div className="mt-6 space-y-6">
      {figures.map((fig, idx) => (
        <figure
          key={`${fig.alt}-${idx}`}
          className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm"
        >
          <img
            src={fig.src}
            alt={fig.alt}
            className="max-h-[520px] w-full object-contain object-top md:max-h-[560px]"
            loading="lazy"
          />
          {fig.caption ? (
            <figcaption className="border-t border-slate-200 bg-white px-4 py-2.5 text-center text-[13px] font-medium text-slate-600">
              {fig.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 text-[15px] leading-relaxed">
      {items.map((item, index) => {
        const normalizedItem = typeof item === 'string' ? { text: item } : item;
        const itemKey = `${normalizedItem.text}-${index}`;
        const labelSplitIndex = normalizedItem.text.indexOf(':');
        const hasLabel = labelSplitIndex > 0 && labelSplitIndex < 45;
        const label = hasLabel ? normalizedItem.text.slice(0, labelSplitIndex + 1) : '';
        const rest = hasLabel ? normalizedItem.text.slice(labelSplitIndex + 1).trim() : normalizedItem.text;
        return (
          <li key={itemKey}>
          <div>
            <span>{hasLabel ? <><strong>{label}</strong> {rest}</> : normalizedItem.text}</span>
            {normalizedItem.children?.length ? (
              <ul className="mt-2 list-circle ml-1 space-y-1.5 pl-5 text-slate-700">
                {normalizedItem.children.map((child, childIndex) => (
                  <li key={`${child}-${childIndex}`}>{child}</li>
                ))}
              </ul>
            ) : null}
            {normalizedItem.figures?.length ? <SetupFigures figures={normalizedItem.figures} /> : null}
          </div>
          </li>
        );
      })}
    </ul>
  );
}

function DocSection({ id, title, intro, points, subSections }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-[32px] font-extrabold tracking-tight text-slate-900">{title}</h2>
      {intro ? <p className="mt-3 text-slate-600 text-[15px] leading-relaxed">{intro}</p> : null}
      {points ? <BulletList items={points} /> : null}

      {subSections ? (
        <div className="mt-4 space-y-4">
          {subSections.map((subSection, subIdx) => (
            <div
              key={subSection.stepKey || `${subSection.title}-${subIdx}`}
              className={subSection.continuation ? 'mt-2 border-l-2 border-primary-200 pl-4' : ''}
            >
              {!subSection.continuation && subSection.title ? (
                <h3 className="text-lg font-bold text-slate-900">{subSection.title}</h3>
              ) : null}
              {subSection.intro ? (
                <p className="mt-2 text-slate-600 text-[15px] leading-relaxed">{subSection.intro}</p>
              ) : null}
              {subSection.points?.length ? <BulletList items={subSection.points} /> : null}
              {subSection.figures?.length ? <SetupFigures figures={subSection.figures} /> : null}
            </div>
          ))}
        </div>
      ) : null}
      <Divider className="!mt-8" />
    </section>
  );
}

export default function Documents() {
  const [expanded, setExpanded] = useState(() => ({
    'setup-process': true,
    'subscription-management': true
  }));
  const expandableIds = useMemo(
    () => new Set(tableOfContents.filter((item) => item.children?.length).map((item) => item.id)),
    [],
  );

  return (
    <div className="min-h-screen bg-primary-50 pb-16">
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
          <Chip
            label="Documentation"
            variant="outlined"
            sx={{ mt: 2, color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}
          />
          <Typography variant="h2" className="!mt-4 text-3xl md:text-5xl !font-extrabold text-white">
            User Manual - SavoryOps SaaS
          </Typography>
          <p className="mt-3 text-primary-100 text-[15px] md:text-base max-w-4xl leading-relaxed">
            Discover how SavoryOps powers subscription lifecycle, onboarding, role-based operations, and restaurant
            workflows in one complete SaaS ecosystem.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3">
            <Card elevation={0} className="!rounded-xl !border !border-slate-200 lg:sticky lg:top-24">
              <CardContent className="!p-0">
                <div className="px-4 py-3 border-b border-slate-200">
                  <p className="text-sm font-bold text-slate-900">Table of Contents</p>
                </div>
                <nav className="max-h-[70vh] overflow-auto">
                  {tableOfContents.map((item) => (
                    <div key={item.id} className="border-b border-slate-100">
                      <div className="flex items-center">
                        <a
                          href={`#${item.id}`}
                          className="flex-1 px-4 py-3 text-[14px] font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-700 transition-colors"
                        >
                          {item.title}
                        </a>
                        {expandableIds.has(item.id) ? (
                          <button
                            type="button"
                            onClick={() => setExpanded((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                            className="px-3 py-2 text-slate-500 hover:text-slate-800"
                            aria-label={`Toggle ${item.title}`}
                          >
                            {expanded[item.id] ? '-' : '+'}
                          </button>
                        ) : null}
                      </div>
                      {item.children?.length && expanded[item.id] ? (
                        <div className="pb-2">
                          {item.children.map((child) => (
                            <p key={child} className="px-6 py-1 text-[13px] text-slate-500">
                              {child}
                            </p>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          <main className="lg:col-span-9">
            <Card elevation={0} className="!rounded-xl !border !border-slate-200">
              <CardContent className="!p-6 md:!p-8 space-y-8">
                <DocSection
                  id="setup-process"
                  title="Setup Process (AWS & MongoDB Deployment)"
                  intro="SavoryOps AWS and MongoDB deployment guide for production-grade setup with domain SSL, backend hardening, and OTP readiness."
                  subSections={[
                    {
                      title: 'Step 1: Database Setup (MongoDB Atlas)',
                      stepKey: 'setup-step-1-network',
                      points: [
                        'Create Cluster: Sign in to MongoDB Atlas and create a cluster in the same region as AWS (recommended: us-east-1).',
                        'Database User: Go to Database Access > Add New Database User and use password authentication; store credentials in .env.',
                        {
                          text: 'Network Access: Go to Network Access > Add IP Address.',
                          children: [
                            'Initial setup: add 0.0.0.0/0 (temporary, for setup only).',
                            'Production: allow only the EC2 Elastic IP.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: setupFlow4,
                          alt: 'MongoDB Atlas Network Access IP Access List',
                          caption:
                            'Reference: Network Access — IP Access List (matches the Network Access steps above)'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'setup-step-1-connect',
                      points: [
                        'Connection String: Click Connect > Drivers and copy the `mongodb+srv://...` URI.'
                      ],
                      figures: [
                        {
                          src: setupFlow1,
                          alt: 'MongoDB Atlas Clusters dashboard showing the SavoryOps cluster',
                          caption: 'Reference: MongoDB Atlas — Clusters (SavoryOps deployment overview)'
                        },
                        {
                          src: setupFlow2,
                          alt: 'MongoDB Atlas Connect modal step 2 choose connection method',
                          caption: 'Reference: Connect — Step 2: Choose a connection method (Drivers)'
                        },
                        {
                          src: setupFlow3,
                          alt: 'MongoDB Atlas Connect modal step 3 Node.js driver and connection string',
                          caption: 'Reference: Connect — Step 3: Node.js driver, npm install, and SRV connection string'
                        }
                      ]
                    },
                    {
                      title: 'Step 2: AWS IAM & Security Configuration',
                      stepKey: 'setup-step-2-iam',
                      points: [
                        {
                          text: 'Create IAM User:',
                          children: [
                            'Go to IAM > Users > Create user.',
                            'Attach policies: `AmazonS3FullAccess`, `AmazonRoute53FullAccess`, and `AmazonSNSFullAccess`.',
                            'Go to Security Credentials > Create access key > Application running outside AWS.',
                            'Save Access Key and Secret Key immediately.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: setupFlow5,
                          alt: 'AWS IAM user savoryops-full-access with attached managed policies',
                          caption: 'Reference: IAM — User savoryops-full-access (matches Create IAM User steps above)'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'setup-step-2-ec2',
                      points: [
                        {
                          text: 'Configure Security Groups (EC2):',
                          children: [
                            'Open EC2 Dashboard > Instances > your instance > Security Group.',
                            'Inbound rules: Custom TCP 8081 from 0.0.0.0/0 (testing), HTTP 80 from 0.0.0.0/0, HTTPS 443 from 0.0.0.0/0, SSH 22 from My IP.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: setupFlow6,
                          alt: 'AWS EC2 Instances list with running instance selected',
                          caption: 'Reference: EC2 — Instances (select server, open Security tab)'
                        },
                        {
                          src: setupFlow7,
                          alt: 'AWS EC2 security group inbound rules summary',
                          caption: 'Reference: EC2 — Security group inbound rules (summary view)'
                        },
                        {
                          src: setupFlow8,
                          alt: 'AWS EC2 edit inbound rules for security group',
                          caption: 'Reference: EC2 — Edit inbound rules (ports 8081, 22, 80, 443)'
                        }
                      ]
                    },
                    {
                      title: 'Step 3: SSL & Domain Management (Route 53 & ACM)',
                      stepKey: 'setup-step-3-route53',
                      points: [
                        'Route 53: Create required hosted zones and update domain registrar with AWS name servers.'
                      ],
                      figures: [
                        {
                          src: setupFlow9,
                          alt: 'AWS Route 53 hosted zones list',
                          caption: 'Reference: Route 53 — Hosted zones (matches the Route 53 step above)'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'setup-step-3-acm',
                      points: [
                        {
                          text: 'ACM Certificates:',
                          children: [
                            'Certificate Manager > Request Certificate.',
                            'Add required domains/subdomains and choose DNS validation.'
                          ]
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'setup-step-3-acm-route53-records',
                      points: ['Create records in Route 53 and wait for status Issued.'],
                      figures: [
                        {
                          src: setupFlow10,
                          alt: 'AWS Certificate Manager request public certificate form',
                          caption: 'Reference: ACM — Request public certificate (DNS validation, RSA 2048)'
                        },
                        {
                          src: setupFlow11,
                          alt: 'AWS Certificate Manager certificates list with Issued status',
                          caption: 'Reference: ACM — Certificates list (Issued / In use after DNS validation)'
                        }
                      ]
                    },
                    {
                      title: 'Step 4: Frontend Deployment (S3 & CloudFront)',
                      stepKey: 'setup-step-4-s3',
                      points: [
                        'S3 Buckets: Create separate buckets for `landing-page`, `super-admin`, and `owner-panel`.',
                        'Upload builds: Upload each frontend build into its matching bucket.'
                      ],
                      figures: [
                        {
                          src: setupFlow12,
                          alt: 'Amazon S3 buckets list showing landing page, admin, and owner panel buckets',
                          caption: 'Reference: S3 — General purpose buckets (Create bucket / naming per environment)'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'setup-step-4-cloudfront',
                      points: [
                        {
                          text: 'CloudFront Distribution:',
                          children: [
                            'Set origin to corresponding S3 bucket.',
                            'Viewer protocol policy: Redirect HTTP to HTTPS.',
                            'Attach ACM SSL certificate and set CNAME (example: `adminpanel.savoryops.com`).'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: setupFlow13,
                          alt: 'CloudFront Create distribution wizard — Get started (distribution name, type, domain)',
                          caption:
                            'Reference: CloudFront — Create distribution (Get started: single website/app, optional Route 53 domain)'
                        },
                        {
                          src: setupFlow14,
                          alt: 'CloudFront distributions list showing Enabled status, CNAMEs, and S3 origins',
                          caption:
                            'Reference: CloudFront — Distributions (custom domains, S3 origins, HTTPS after ACM attach)'
                        }
                      ]
                    },
                    {
                      title: 'Step 5: AWS SNS OTP Configuration',
                      points: [
                        {
                          text: 'Move out of SMS Sandbox:',
                          children: [
                            'Open AWS Support Center and request SNS SMS production access.',
                            'Provide OTP use case, app URL, opt-in process, and sample OTP template.',
                            'Request required spend threshold for expected monthly OTP traffic.'
                          ]
                        },
                        {
                          text: 'Configure SMS Preferences:',
                          children: [
                            'SNS Console > Text messaging (SMS) > Edit.',
                            'Set default type to Transactional.',
                            'Set account spend limit as approved.'
                          ]
                        },
                        {
                          text: 'Country Compliance:',
                          children: [
                            'India: complete DLT registration and provide Entity ID/Template ID.',
                            'USA: configure 10DLC or Toll-Free route where required.'
                          ]
                        },
                        'Backend integration: Ensure SNS publish request sets `AWS.SNS.SMS.MessageType` to `Transactional` for OTP delivery.'
                      ],
                      figures: [
                        {
                          src: setupFlow15,
                          alt: 'AWS SNS SMS OTP configuration reference',
                          caption: 'Reference: SNS — SMS sandbox, transactional OTP, and regional compliance'
                        }
                      ]
                    },
                    {
                      title: 'Step 6: Backend Server Setup (EC2, Node.js, Nginx)',
                      points: [
                        'Connect to EC2: `ssh -i "your-key.pem" ubuntu@your-ec2-ip`.',
                        {
                          text: 'Install Environment:',
                          children: [
                            '`sudo apt update && sudo apt install nginx git certbot python3-certbot-nginx -y`',
                            '`curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -`',
                            '`sudo apt install -y nodejs && sudo npm install -g pm2`'
                          ]
                        },
                        {
                          text: 'Clone & Configure:',
                          children: [
                            '`git clone <your-backend-repo>`',
                            '`cd <backend-folder> && npm install`',
                            'Create `.env` with Mongo URI, AWS keys, and SNS config.'
                          ]
                        },
                        {
                          text: 'Nginx Reverse Proxy:',
                          children: [
                            'Create config that proxies backend domain to `localhost:8081`.',
                            'Enable site: `sudo ln -s /etc/nginx/sites-available/backend /etc/nginx/sites-enabled/`',
                            'Test and restart: `sudo nginx -t && sudo systemctl restart nginx`'
                          ]
                        },
                        'SSL via Certbot: `sudo certbot --nginx -d backend.yourdomain.com`.',
                        {
                          text: 'Start Application:',
                          children: [
                            '`pm2 start index.js --name "savoryops-backend"`',
                            '`pm2 save`'
                          ]
                        }
                      ]
                    },
                    {
                      title: 'Step 7: Final Verification',
                      points: [
                        'Verify frontend domains load over HTTPS and show login screens correctly.',
                        'Verify backend health URL (example: `/health`) returns success.',
                        'Verify image upload and core APIs from Owner/Super Admin panels.'
                      ]
                    }
                  ]}
                />

                <DocSection
                  id="intro"
                  title="1. Introduction"
                  intro="SavoryOps is a comprehensive restaurant SaaS platform built for subscription-based, multi-tenant operations. It combines marketing, onboarding, branch management, order execution, reservation handling, billing, analytics, and role-based access in one unified ecosystem."
                  points={[
                    'Software type: multi-tenant Restaurant SaaS with dedicated owner database isolation and subdomain provisioning.',
                    'Core panels and apps: Landing Page, Super Admin Panel, Owner Panel, User App, and Employee App.',
                    'Business goal: support revenue generation through Free, Lifetime Limited, and Paid subscription models with taxes, discounts, and fiscal tracking.',
                    'Operational scope: business/branch setup, menu and pricing management, role-based staff assignment, KOT flow, billing, table reservation, and exports.',
                    'Global readiness: supports configurable timezone, language, currency, branding, and standardized reporting across tenant ecosystems.'
                  ]}
                />

                <DocSection
                  id="subscription-management"
                  title="2. Subscription Management"
                  intro="This section presents the subscription-related details in the same content flow you provided."
                  subSections={[
                    {
                      title: '1. Subscription Plan Hierarchy',
                      points: [
                        'The Super Admin controls the revenue model by configuring three distinct types of service plans.',
                        {
                          text: 'Free Plan:',
                          children: [
                            'Designed for initial onboarding and trial periods.',
                            'Super Admin can toggle between Unlimited or Limited access.',
                            'If Limited, the Owner is restricted in creating businesses, branches, employees, and items.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot17,
                          alt: 'Subscription plan creation screen showing plan type and access settings',
                          caption: 'Reference: Super Admin — Add Plan form (plan type, duration, and access limits)'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'subscription-plan-hierarchy-rest',
                      points: [
                        {
                          text: 'Lifetime Limited Plan:',
                          children: [
                            'Serves as the default system fallback when no active paid or free plan exists.',
                            'Non-purchasable: It is automatically applied by the system logic.',
                            'Fixed Constraints: Super Admin cannot grant Unlimited access or set a duration for this tier.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot18,
                          alt: 'Subscription plan creation screen with Lifetime limited plan type selected',
                          caption: 'Reference: Super Admin — Add Plan form for Lifetime Limited configuration'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'subscription-plan-hierarchy-paid',
                      points: [
                        {
                          text: 'Paid Plan:',
                          children: [
                            'The primary monetization engine with flexible durations (Monthly or Yearly).',
                            'Supports Tax Integration (selected from pre-defined tax settings) and Discounting.',
                            'Grants full access to advanced SaaS features based on the Super Admin configuration.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot16,
                          alt: 'Subscription plan creation screen with Paid plan options including duration, price, tax, and discount',
                          caption: 'Reference: Super Admin — Add Plan form for Paid plan configuration'
                        }
                      ]
                    },
                    {
                      title: '2. Owner-Side Subscription Journey',
                      points: [
                        'Automated Onboarding: Owners sign up via the Landing Page with OTP verification to prevent dummy account creation.'
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot19,
                          alt: 'Owner signup screen with user details and phone verification flow',
                          caption: 'Reference: Owner onboarding signup form used before subscription journey'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-subscription-journey-rest',
                      points: [
                        'Seamless Upgrades: Owners access the Subscription Page via their profile dropdown to view current plan status and history.'
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot1,
                          alt: 'Owner subscription page showing current plan details and upgrade option',
                          caption: 'Reference: Owner panel subscription page for plan status, history, and upgrades'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-subscription-journey-rest-2',
                      points: [
                        'Integrated Payments: The upgrade flow redirects to a plan selection page powered by Razorpay for secure, real-time transactions.'
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot2,
                          alt: 'Owner purchase plan page with Razorpay payment method and pricing summary',
                          caption: 'Reference: Owner upgrade flow with Razorpay plan selection and checkout details'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-subscription-journey-rest-3',
                      points: [
                        'Self-Service Management: Owners can upgrade, downgrade, or cancel their plans directly through their dashboard.'
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot3,
                          alt: 'Owner subscription dashboard with upgrade and cancel plan actions',
                          caption: 'Reference: Owner subscription management view for upgrading and canceling plans'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-subscription-journey-rest-4',
                      points: [
                        'Timezone Synchronization: Plan expiration and renewals are calculated based on the Super Admin global timezone settings to maintain consistency.'
                      ]
                    },
                    {
                      title: '3. Super Admin Oversight & Analytics',
                      points: [
                        'Revenue Dashboard: A centralized hub displaying Total Earning, Tax Amount, and Net Revenue through intuitive monthly graphs.'
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot5,
                          alt: 'Super Admin dashboard showing total earning, revenue cards, and monthly revenue graph',
                          caption: 'Reference: Super Admin revenue dashboard with earnings metrics and monthly graph'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'super-admin-oversight-rest',
                      points: [
                        'Subscription Logs: A master Subscription History page allows the Admin to track every transaction across the entire platform.'
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot6,
                          alt: 'Super Admin subscription history table showing plans, durations, taxes, and status',
                          caption: 'Reference: Super Admin subscription logs with full transaction history'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'super-admin-oversight-rest-2',
                      points: [
                        {
                          text: 'Tax & Currency Control: The Admin defines global tax rates used during plan creation.',
                          children: [
                            'Multiple currencies are supported to enable Owners to manage branches across different global regions.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot8,
                          alt: 'Currency configuration table with country, symbol, and position settings',
                          caption: 'Reference: Super Admin currency management used during subscription configuration'
                        },
                        {
                          src: subscriptionScreenshot7,
                          alt: 'Tax configuration table with tax names, type, and percentage rates',
                          caption: 'Reference: Super Admin tax management with configured global tax rates'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'super-admin-oversight-rest-3',
                      points: [
                        'Fiscal Year Automation: The system tracks earnings by fiscal year and automatically provisions the next fiscal year to ensure uninterrupted reporting.'
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot9,
                          alt: 'Fiscal year settings table showing active and expired fiscal years',
                          caption: 'Reference: Super Admin fiscal year configuration and automatic yearly rollover'
                        }
                      ]
                    },
                    {
                      title: '4. Plan-Based Access Gating',
                      points: [
                        'Dynamic Enforcement: The system actively checks Owner plan status to enable or disable Add/Edit actions for Businesses, Branches, and Employees.'
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot10,
                          alt: 'Owner subscription details showing plan status and resource limits enforcement',
                          caption: 'Reference: Owner plan limits view used for feature access enforcement'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'plan-based-access-gating-rest',
                      points: [
                        'Global Setting Reflection: Any change made by the Super Admin to software name, logos, or theme colors reflects instantly across the Landing Page, Super Admin Panel, and Owner Panels without code changes.'
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot11,
                          alt: 'Theme settings screen showing logo and color configuration',
                          caption: 'Reference: Global theme and branding settings reflected across all panels'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'plan-based-access-gating-rest-2',
                      points: [
                        'Operational Transparency: Owners can export Orders, Revenue, and Table Reservations into PDF format for offline accounting and audits.'
                      ],
                      figures: [
                        {
                          src: subscriptionScreenshot12,
                          alt: 'Orders page with export PDF action for offline accounting',
                          caption: 'Reference: Operational reporting export view for orders and audit workflows'
                        }
                      ]
                    }
                  ]}
                />

                <DocSection
                  id="onboarding"
                  title="3. Onboarding (Owner, Employee, Customer)"
                  subSections={[
                    {
                      title: '1. Owner Onboarding: The "Tenant" Setup',
                      intro: 'The owner onboarding is the most critical process as it triggers the automated provisioning of the SaaS infrastructure.',
                      points: [
                        'Registration & Data Entry: The owner visits the main landing page and enters their personal profile (Name, Email, Phone, Gender, and Password).'
                      ],
                      figures: [
                        {
                          src: onboardingScreenshot1,
                          alt: 'Owner signup form with personal details fields and onboarding steps',
                          caption: 'Reference: Owner registration form for onboarding and profile setup'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-onboarding-tenant-setup-rest',
                      points: [
                        'Security Verification: To prevent bot accounts, a mandatory OTP is sent to the owner mobile number.'
                      ],
                      figures: [
                        {
                          src: onboardingScreenshot2,
                          alt: 'Owner OTP verification screen during onboarding flow',
                          caption: 'Reference: Owner mobile OTP verification step in signup onboarding'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-onboarding-tenant-setup-rest-2',
                      points: [
                        {
                          text: 'Automated Provisioning: Upon successful OTP verification, the system executes two background tasks:',
                          children: [
                            'Database Isolation: A separate, dedicated database is created for the owner to ensure data security.',
                            "Subdomain Generation: A professional subdomain is generated using the owner name (e.g., marcus.savoryops.net)."
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: onboardingScreenshot3,
                          alt: 'Owner dashboard after onboarding showing provisioned tenant environment',
                          caption: 'Reference: Provisioned owner workspace after successful onboarding'
                        },
                        {
                          src: onboardingScreenshot4,
                          alt: 'MongoDB tenant records showing isolated owner database and subdomain metadata',
                          caption: 'Reference: Database isolation and subdomain mapping created during provisioning'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-onboarding-tenant-setup-rest-3',
                      points: [
                        'Access Activation: The owner is automatically assigned the Free Plan or Lifetime Limited plan (depending on admin settings) to begin setting up their restaurants and branches.'
                      ]
                    },
                    {
                      title: '2. Employee Onboarding: Role-Based Integration',
                      intro: 'Employees do not operate as independent entities; they are invited or assigned to a specific business infrastructure.',
                      points: [
                        'Standard Sign-Up: The employee downloads the Employee App and registers with their personal details (Name, Email, Mobile, and Password).'
                      ],
                      figures: [
                        {
                          src: employeeOnboardingSignUp,
                          alt: 'Employee app sign-up screen with name, email, password, and phone fields',
                          caption: 'Reference: Employee App — standard registration with personal credentials'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'employee-onboarding-role-based-rest',
                      points: [
                        'The "Idle" State: Initially, the employee has no access. They see a blank interface until an Owner links their account.',
                        {
                          text: 'Owner Assignment:',
                          children: [
                            'The Owner enters the Employee ID in the Owner Panel to verify the user.',
                            'The Owner assigns the employee to a specific Branch and selects one of 5 Roles: Waiter, Cashier, Host, Chef, or Head Chef.'
                          ]
                        },
                        'Permission Sync: Once assigned, the Employee App dynamically updates. The employee can now see Job History and specific functional pages (e.g., Kitchen for Chefs or Order page for Waiters).'
                      ],
                      figures: [
                        {
                          src: employeeOnboardingProfile,
                          alt: 'Employee app profile screen showing assigned role, employee ID, and Job History access',
                          caption:
                            'Reference: Employee App after assignment — profile, role badge, and enabled features such as Job History'
                        }
                      ]
                    },
                    {
                      title: '3. Customer Onboarding: Flexible Engagement',
                      intro: 'Customers have two ways to interact with the system: Guest browsing or authenticated ordering.',
                      points: [
                        'Guest Access (Non-Login): Customers can browse menus, view business details (hours/reviews), and add items to a cart without an account. However, they cannot place an order or reserve a table.',
                        {
                          text: 'Account Creation:',
                          children: [
                            'Self-Registration: Customers sign up via the User App with Name, Email, Phone, and a secure password (8-14 characters with mixed casing and digits).',
                            'Social/Phone Login: Customers can sign in via Email/Password or a Phone + OTP flow for faster access.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: customerOnboardingSignUp,
                          alt: 'User app sign-up screen with name, email, password, and phone fields',
                          caption: 'Reference: User App — account creation and self-registration flow'
                        },
                        {
                          src: customerOnboardingSignIn,
                          alt: 'User app sign-in screen with email or phone login toggle and password field',
                          caption: 'Reference: User App — email/password and phone sign-in entry points'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'customer-onboarding-flexible-rest',
                      points: [
                        {
                          text: 'In-Branch Onboarding (QR Scan):',
                          children: [
                            'When a customer scans a Table QR Code, the app automatically identifies the branch and table number.',
                            "If a Waiter creates an order for a new customer using their mobile number, the system automatically creates an account for that customer if one doesn't exist."
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: customerOnboardingRestaurantSelect,
                          alt: 'User app select restaurant screen with business cards, branches, and QR scanner',
                          caption:
                            'Reference: User App — business and branch selection aligned with in-branch and QR-driven onboarding'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'customer-onboarding-flexible-rest-profile',
                      points: [
                        'Profile Personalization: Once logged in, customers can set their preferred language (from 8 options) and adjust date/time formats to match their local preference.'
                      ]
                    }
                  ]}
                />

                <DocSection
                  id="order-flow"
                  title="4. Order Flow"
                  intro='The SavoryOps Order Flow is a sophisticated, multi-role synchronization process designed to ensure seamless communication between the front-of-house (Waiters), back-of-house (Chefs), and the administrative desk (Cashier/Owner).'
                  subSections={[
                    {
                      title: '1. Order Initiation (The Front-End)',
                      intro: 'Orders can be initiated in two ways, ensuring flexibility for both tech-savvy customers and traditional service:',
                      points: [
                        {
                          text: 'Customer Self-Service: The customer scans the Table QR Code via the User App.',
                          children: [
                            'They browse the menu, select items (including Add-ons and Special Instructions), and submit the order.',
                            'Condition: The system validates the table via the QR scan; orders cannot be placed without a confirmed table.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: orderFlowQrScanScreenshot,
                          alt: 'User app menu view after table QR scan for customer self-service ordering',
                          caption:
                            'Reference: Customer self-service flow where users browse menu items and place an order after scanning the table QR code'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'order-flow-initiation-waiter-assisted',
                      points: [
                        {
                          text: 'Waiter-Assisted Ordering: The Waiter scans the QR code on behalf of the customer.',
                          children: [
                            'If the customer is new, the Waiter enters their mobile number, and the system automatically creates a customer account.',
                            'The Waiter can also link multiple tables to a single order if the party is large.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: orderFlowWaiterSearchCustomerScreenshot,
                          alt: 'Employee app screen where waiter searches customer by mobile number before creating order',
                          caption:
                            'Reference: Waiter-assisted order initiation where staff searches customer by mobile number before placing the order'
                        },
                        {
                          src: orderFlowWaiterOrderDetailsScreenshot,
                          alt: 'Employee app order details screen showing accepted order status, table details, and KOT details',
                          caption:
                            'Reference: Waiter-assisted order workflow view with order status, table details, and KOT progression'
                        }
                      ]
                    },
                    {
                      title: '2. The Kitchen Workflow (KOT Management)',
                      intro: 'Once an order is submitted, it enters the Kitchen Order Ticket (KOT) lifecycle:',
                      points: [
                        'Acceptance: The Waiter receives the Pending order and accepts it. The status changes to Accepted.'
                      ],
                      figures: [
                        {
                          src: orderFlowAcceptanceScreenshot,
                          alt: 'Employee app orders screen showing pending order list and Accept Order action',
                          caption:
                            'Reference: Acceptance step where the waiter receives a pending order and marks it as accepted'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'order-flow-kitchen-workflow-rest',
                      points: [
                        "KOT Generation: The system automatically generates a KOT and routes it to the Head Chef's interface."
                      ],
                      figures: [
                        {
                          src: orderFlowKotGenerationScreenshot,
                          alt: "Kitchen app KOT card showing generated ticket and confirm action in Head Chef's interface",
                          caption:
                            "Reference: KOT Generation step where the system routes the generated KOT to the Head Chef's kitchen interface"
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'order-flow-kitchen-workflow-rest-2',
                      points: [
                        'Assignment: The Head Chef reviews the KOT and assigns specific items or the entire KOT to a Chef.'
                      ],
                      figures: [
                        {
                          src: orderFlowAssignmentScreenshot,
                          alt: 'Kitchen app KOT card in confirmed state showing assign item and assign KOT actions',
                          caption:
                            'Reference: Assignment step where the Head Chef assigns items or the full KOT to a chef'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'order-flow-kitchen-workflow-rest-3',
                      points: [
                        'Status Shift: KOT status moves to Confirmed -> Assign.'
                      ],
                      figures: [
                        {
                          src: orderFlowStatusShiftScreenshot,
                          alt: 'My Assignments screen showing assigned KOT item and Set to Preparing action',
                          caption:
                            'Reference: Status Shift step where KOT items move into assigned workflow before preparation'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'order-flow-kitchen-workflow-rest-4',
                      points: [
                        'Preparation: The Chef updates the status to Preparing. Once finished, the status is marked as Ready to Serve.'
                      ],
                      figures: [
                        {
                          src: orderFlowPreparationScreenshot,
                          alt: 'Employee order details screen showing ready-to-serve status and complete KOT actions',
                          caption:
                            'Reference: Preparation step where the chef updates items to Preparing and then marks them Ready to Serve'
                        }
                      ]
                    },
                    {
                      title: '3. Fulfillment & Service',
                      points: [
                        'Serving: The Waiter picks up the prepared items and serves the customer.',
                        'Order Expansion: While the order is still Open, customers can click the Add New button to append more items to the existing order.'
                      ],
                      figures: [
                        {
                          src: orderFlowOrderExpansionScreenshot,
                          alt: 'User order details screen showing Add Item action while order is open',
                          caption:
                            'Reference: Order expansion flow where customers add more items to an open order'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'order-flow-fulfillment-service-rest',
                      points: [
                        'Closure: Once the customer has finished their meal, the Waiter moves the order to the Closed status. This action hides the Add New button.'
                      ],
                      figures: [
                        {
                          src: orderFlowClosureScreenshot,
                          alt: 'Employee order details view showing completed KOT and Close Order action',
                          caption:
                            'Reference: Closure step where the waiter moves the order to Closed and disables further item additions'
                        }
                      ]
                    },
                    {
                      title: '4. Billing & Payment (The Final Step)',
                      points: [
                        'Cashier Oversight: The Cashier views the Closed (Unpaid) order in their dashboard.'
                      ],
                      figures: [
                        {
                          src: orderFlowCashierOversightScreenshot,
                          alt: 'Cashier dashboard showing accepted, completed, unpaid, and pending amount metrics',
                          caption:
                            'Reference: Cashier oversight view for tracking closed unpaid orders and billing status at a glance'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'order-flow-billing-payment-rest',
                      points: [
                        'Payment Processing: After the customer pays via cash or card, the Cashier manually updates the payment status to Paid.'
                      ],
                      figures: [
                        {
                          src: orderFlowPaymentProcessingScreenshot,
                          alt: 'Cashier payment confirmation screen with bill breakdown and confirm payment action',
                          caption:
                            'Reference: Payment processing step where the cashier confirms payment and marks the order as paid'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'order-flow-billing-payment-rest-2',
                      points: [
                        {
                          text: 'Invoice & Feedback: The Customer can now download the PDF Invoice.',
                          children: [
                            'The system unlocks the Review & Rating feature for the customer to provide feedback on their experience.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: orderFlowInvoiceFeedbackScreenshot,
                          alt: 'Customer order details screen showing invoice and review actions after payment',
                          caption:
                            'Reference: Invoice and feedback step where customers can download invoice and submit rating after payment'
                        }
                      ]
                    }
                  ]}
                />

                <DocSection
                  id="reservation-flow"
                  title="5. Table Reservation Flow"
                  intro="The SavoryOps Table Reservation Flow is a high-efficiency system designed to bridge the gap between digital bookings and physical floor management. It offers customers flexibility in how they book while giving restaurant staff (Owners and Hosts) real-time control."
                  subSections={[
                    {
                      title: '1. Feature Activation (Owner Control)',
                      intro: 'Before a customer can book, the infrastructure must be enabled:',
                      points: [
                        'Branch-Level Toggle: The Owner must manually activate the Table Reservation switch in the Branch Settings.'
                      ],
                      figures: [
                        {
                          src: tableReservationBranchToggleScreenshot,
                          alt: 'Owner branch settings screen with table reservation toggle control',
                          caption:
                            'Reference: Branch-level settings where the owner enables table reservation for a branch'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'reservation-feature-activation-rest',
                      points: [
                        'Visibility: Only branches with this feature Active will appear in the customer reservation search list.'
                      ],
                      figures: [
                        {
                          src: tableReservationVisibilityScreenshot,
                          alt: 'User app add table reservation screen showing active branch selection options',
                          caption:
                            'Reference: Visibility rule where only branches with reservation feature enabled appear in customer booking search'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'reservation-feature-activation-rest-2',
                      points: [
                        'Capacity Management: The Owner defines Areas (e.g., Rooftop, VIP Lounge) and Tables with specific seating capacities to ensure the system does not overbook.'
                      ]
                    },
                    {
                      title: '2. Customer Booking Process',
                      intro: 'Customers can book via the User App using two distinct methods based on their preference:',
                      points: [
                        {
                          text: 'Type A: Pick Spot (Precision Booking)',
                          children: [
                            'The customer selects a specific Area and a specific Table Number.',
                            'Ideal for customers who have a favorite seat (e.g., a window table or a specific poolside spot).'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: tableReservationVisibilityScreenshot,
                          alt: 'User app table reservation screen with Pick Spot flow fields for area and table selection',
                          caption:
                            'Reference: Type A Pick Spot flow where customers choose area and specific table during reservation'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'reservation-customer-booking-rest',
                      points: [
                        {
                          text: 'Type B: Quick Seat (Speed Booking)',
                          children: [
                            'The customer simply enters the Number of Guests.',
                            'The system/Host handles the table assignment upon arrival.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: tableReservationQuickSeatScreenshot,
                          alt: 'User app table reservation screen with Quick Seat selected and guest count input',
                          caption:
                            'Reference: Type B Quick Seat flow where customers enter guest count and proceed without selecting a specific table'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'reservation-customer-booking-rest-2',
                      points: [
                        'Scheduling: The customer selects the Date and Time and has the option to add Special Notes (e.g., Anniversary dinner or High chair needed).'
                      ]
                    },
                    {
                      title: '3. Host & Owner Management (The Dashboard)',
                      intro: 'Once a reservation is submitted, it enters the management pipeline:',
                      points: [
                        'The Host Role: The Host is the primary manager of reservations. In their app, they see a dedicated list of all bookings for the current date.'
                      ],
                      figures: [
                        {
                          src: tableReservationHostRoleScreenshot,
                          alt: 'Host app reservations list showing current-date bookings and status badges',
                          caption:
                            'Reference: Host role dashboard with a dedicated list of current-day reservations'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'reservation-host-owner-management-rest',
                      points: [
                        {
                          text: 'Real-Time Status Updates: The Host or Owner can move a reservation through its lifecycle:',
                          children: [
                            'Pending: Newly created, awaiting acknowledgment.',
                            'Confirmed: The table is held for the customer.',
                            'Cancelled/Completed: The final states of the booking.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: tableReservationStatusUpdatesScreenshot,
                          alt: 'Reservation details screen with pending status and confirm/reject actions',
                          caption:
                            'Reference: Real-time status update workflow where host or owner transitions reservations through lifecycle states'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'reservation-host-owner-management-rest-2',
                      points: [
                        'History Tracking: The system maintains a Status History for every reservation, allowing the Owner to see exactly when a status was changed and by whom.'
                      ],
                      figures: [
                        {
                          src: tableReservationHistoryTrackingScreenshot,
                          alt: 'Reservation status history modal showing timeline of pending, confirmed, and seated states',
                          caption:
                            'Reference: History tracking view that records reservation status changes with timestamps and sequence'
                        }
                      ]
                    },
                    {
                      title: '4. Operational Visibility',
                      points: [
                        'Host Home Page: Provides a visual overview of all tables in the assigned branch, organized by Area. This allows the Host to see the layout and manage guest flow effortlessly.'
                      ],
                      figures: [
                        {
                          src: tableReservationHostHomePageScreenshot,
                          alt: 'Host home page showing table overview by area with availability and occupancy states',
                          caption:
                            'Reference: Operational visibility on host home page with area-wise table layout and live status'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'reservation-operational-visibility-rest',
                      points: [
                        'Owner Analytics: The Owner can view comprehensive reservation reports filtered by Branch and Fiscal Year.',
                        'Data Portability: All reservation lists and reports can be exported as PDFs for daily briefings or physical record-keeping.'
                      ],
                      figures: [
                        {
                          src: tableReservationOwnerAnalyticsScreenshot,
                          alt: 'Owner reservation analytics list with branch and fiscal year filters plus PDF export',
                          caption:
                            'Reference: Owner analytics view showing reservation reports with branch/fiscal-year filters and PDF export capability'
                        }
                      ]
                    }
                  ]}
                />

                <DocSection
                  id="landing-page"
                  title="6. Landing Page"
                  intro='The SavoryOps Landing Page serves as the primary gateway for the SaaS platform, functioning as both a marketing tool to attract new restaurant owners and a functional portal for existing users to access their accounts.'
                  subSections={[
                    {
                      title: '1. Strategic Branding & Customization',
                      intro: 'The landing page is designed to be fully dynamic, meaning the Super Admin can rebrand the entire site via the Admin Panel without touching any code.',
                      points: [
                        'Visual Identity: The software name, primary/secondary theme colors, dark/light logos, and favicon reflect the Super Admin Theme Settings.',
                        'Legal & Contact Info: Address, email, contact number, copyright text, and software descriptions are pulled directly from General Settings.',
                        'Social Integration: The footer dynamically displays links to the platform Facebook, Instagram, Twitter, YouTube, LinkedIn, WhatsApp, and Pinterest profiles as configured in Social Media Settings.'
                      ]
                    },
                    {
                      title: '2. Core Functional Sections',
                      intro: 'The landing page includes several key sections designed to convert visitors into platform users:',
                      points: [
                        {
                          text: 'Pricing & Plans:',
                          children: [
                            'Directly displays the Paid and Free plans created by the Super Admin.',
                            'Prospective owners can compare features (Unlimited vs. Limited access) before deciding to register.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: landingPagePricingPlansScreenshot,
                          alt: 'Landing page pricing plans cards showing monthly and yearly plan options',
                          caption:
                            'Reference: Landing page Pricing & Plans section where paid and free plans are displayed for comparison'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'landing-page-core-functional-sections-rest',
                      points: [
                        {
                          text: 'Contact Us (Lead Generation):',
                          children: [
                            'Features a form where visitors can enter their details and specific software requirements.',
                            'Lead Management: Submitted inquiries are sent directly to the Super Admin Contact Us page for follow-up.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: landingPageContactUsScreenshot,
                          alt: 'Landing page contact us section with inquiry form and support contact details',
                          caption:
                            'Reference: Contact Us lead-generation section where visitors submit requirements for Super Admin follow-up'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'landing-page-language-support',
                      points: [
                        {
                          text: 'Language Support:',
                          children: [
                            'Offers a selection of 8 languages, allowing the platform to appeal to a global audience.',
                            'The Default Language set by the Super Admin is applied when a user first visits the site.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: landingPageLanguageSupportScreenshot,
                          alt: 'Admin language support settings showing default language and localization configuration',
                          caption:
                            'Reference: Language support configuration where default language is applied for first-time site visitors'
                        }
                      ]
                    },
                    {
                      title: '3. User Access Points (Sign-In/Sign-Up)',
                      intro: 'The landing page acts as the entry point for all three primary user roles:',
                      points: [
                        {
                          text: 'Owner Onboarding:',
                          children: [
                            'Contains the Sign-Up button that initiates the multi-tenant setup.',
                            'Collects personal details and triggers the OTP verification process.',
                            'Once verified, the system redirects the owner to their newly provisioned subdomain.'
                          ]
                        },
                        {
                          text: 'Existing User Login:',
                          children: [
                            'Owners: Can sign in with their email and password.',
                            'Customers: Access their account via email/password or phone number (with OTP).',
                            'Employees: Log in to access their specific role-based dashboards.'
                          ]
                        }
                      ]
                    },
                    {
                      title: '4. Technical Configuration',
                      points: [
                        'Domain Management: The landing page and Super Admin panel typically share one primary domain, while registered owners operate on a separate domain (using subdomains) to maintain professional separation.'
                      ]
                    }
                  ]}
                />

                <DocSection
                  id="super-admin"
                  title="7. Super Admin Panel"
                  intro='The Super Admin Panel in SavoryOps is the brain of the entire SaaS ecosystem. It is where the platform owner controls the software global appearance, monitors system-wide performance, manages the subscription revenue model, and oversees all tenants (Owners) without needing to access individual databases.'
                  subSections={[
                    {
                      title: '1. Global Software Configuration (The "No-Code" Interface)',
                      intro: 'The Super Admin can completely rebrand the platform across all panels (Super Admin, Owner, and Landing Page) through these settings:',
                      points: [
                        'General Settings: Manage the Software Identity (Name, Address, Email, Version, Copyright).'
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot1,
                          alt: 'Super Admin general settings form for software identity details',
                          caption: 'Reference: Super Admin general settings for platform identity and contact details'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'super-admin-global-config-rest',
                      points: [
                        'Theme Settings: Control the visual aesthetics by uploading light/dark logos, favicons, and setting Primary and Secondary theme colors.'
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot2,
                          alt: 'Super Admin theme settings with logos, favicon, and primary/secondary colors',
                          caption: 'Reference: Super Admin theme configuration for platform-wide branding'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'super-admin-global-config-rest-2',
                      points: [
                        {
                          text: 'Misc Settings:',
                          children: [
                            'Timezone & Formats: Set the global date/time format (reflects in the Super Admin panel).',
                            'Default Language: Choose the primary language for the landing page and initial user sessions.',
                            'Currency: Select the default currency for platform-wide plans and billing.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot3,
                          alt: 'Super Admin misc settings for timezone, date format, language, and currency',
                          caption: 'Reference: Super Admin miscellaneous global configuration settings'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'super-admin-global-config-rest-3',
                      points: [
                        'Social Media Settings: Update links (Facebook, LinkedIn, WhatsApp, etc.) that automatically populate the landing page footer.'
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot4,
                          alt: 'Super Admin social media settings with platform URL mappings',
                          caption: 'Reference: Social media link configuration reflected on landing page footer'
                        }
                      ]
                    },
                    {
                      title: '2. Revenue & Subscription Management',
                      intro: 'This is the core monetization module where the Super Admin designs the business model:',
                      points: [
                        {
                          text: 'Plan Creation: Build Free, Lifetime Limited, and Paid plans.',
                          children: [
                            'Set Access Types (Unlimited vs. Limited) to restrict how many branches or employees an owner can add.',
                            'Define Durations (Monthly/Yearly) and Discounts.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot5,
                          alt: 'Super Admin plan list with free, limited, and paid subscription plans',
                          caption: 'Reference: Plan creation and management table in Super Admin subscription module'
                        },
                        {
                          src: superAdminScreenshot6,
                          alt: 'Super Admin add plan form with plan type, duration, price, tax, and limits',
                          caption: 'Reference: Plan creation form used to configure new subscription plans'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'super-admin-revenue-subscription-rest',
                      points: [
                        'Tax Management: Create global tax profiles (e.g., VAT 10%) that can be attached to specific plans.'
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot7,
                          alt: 'Super Admin tax management list with tax names, type, and rates',
                          caption: 'Reference: Global tax profile setup for attaching taxes to subscription plans'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'super-admin-revenue-subscription-rest-2',
                      points: [
                        'Currency Management: Add multiple international currencies to support owners operating in different global regions.'
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot8,
                          alt: 'Super Admin currency management table with country, symbol, and position',
                          caption: 'Reference: International currency setup for multi-region owner billing support'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'super-admin-revenue-subscription-rest-3',
                      points: [
                        'Fiscal Year Tracking: Manage financial years to organize earning reports. The system automatically provisions the next fiscal year upon completion of the current one.'
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot9,
                          alt: 'Super Admin fiscal year list showing active and expired financial years',
                          caption: 'Reference: Fiscal year tracking and rollover management in Super Admin settings'
                        }
                      ]
                    },
                    {
                      title: '3. Centralized Monitoring (Dashboard & Analytics)',
                      intro: 'The Super Admin sees a high-level overview of the entire business health:',
                      points: [
                        'Financial Insights: Real-time graphs for Total Revenue, Tax Collected, and Net Earnings.'
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot10,
                          alt: 'Super Admin dashboard with revenue cards and monthly performance chart',
                          caption: 'Reference: Centralized monitoring dashboard with financial insights and trends'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'super-admin-centralized-monitoring-rest',
                      points: [
                        'Subscription History: A master ledger of all purchases made by every owner across the platform.'
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot12,
                          alt: 'Super Admin subscription history ledger with owner plans and statuses',
                          caption: 'Reference: Central subscription history for all owner plan purchases'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'super-admin-centralized-monitoring-rest-2',
                      points: [
                        'Tenant Insights: Comprehensive lists of every Owner, Employee, and Customer registered on the system.'
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot13,
                          alt: 'Super Admin owner list showing registered tenant owners',
                          caption: 'Reference: Tenant insights - Owner directory in Super Admin'
                        },
                        {
                          src: superAdminScreenshot14,
                          alt: 'Super Admin employee list showing tenant employee records',
                          caption: 'Reference: Tenant insights - Employee directory in Super Admin'
                        },
                        {
                          src: superAdminScreenshot15,
                          alt: 'Super Admin customer list showing tenant customer records',
                          caption: 'Reference: Tenant insights - Customer directory in Super Admin'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'super-admin-centralized-monitoring-rest-3',
                      points: [
                        {
                          text: 'Operational Oversight: A bird\'s-eye view of all Businesses and Branches created by tenants.',
                          children: [
                            'Note: To ensure tenant privacy, the Super Admin can view these lists but cannot add, edit, or delete the tenant specific data.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot19,
                          alt: 'Super Admin business list showing tenant businesses and owner mapping',
                          caption: 'Reference: Operational oversight - Businesses list in Super Admin'
                        },
                        {
                          src: superAdminScreenshot20,
                          alt: 'Super Admin branch list showing tenant branches with business and city details',
                          caption: 'Reference: Operational oversight - Branches list in Super Admin'
                        }
                      ]
                    },
                    {
                      title: '4. Lead & User Management',
                      points: [
                        'Contact Us (Lead Box): A dedicated area to view requirements and inquiries submitted by potential customers via the landing page.'
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot16,
                          alt: 'Super Admin contact us inquiries list from landing page submissions',
                          caption: 'Reference: Lead inbox in Super Admin for incoming contact requests'
                        },
                        {
                          src: superAdminScreenshot17,
                          alt: 'Landing page contact us form for submitting customer requirements',
                          caption: 'Reference: Public contact form that feeds Super Admin lead inbox'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'super-admin-lead-user-management-rest',
                      points: [
                        {
                          text: 'Security & Access:',
                          children: [
                            'Profile Management: Update the Super Admin password and profile image.',
                            'Role Oversight: Monitor which roles (Waiter, Chef, etc.) are most active across the platform.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: superAdminScreenshot18,
                          alt: 'Super Admin change password screen under profile security settings',
                          caption: 'Reference: Security and access controls for Super Admin profile management'
                        }
                      ]
                    }
                  ]}
                />

                <DocSection
                  id="owner-panel"
                  title="8. Owner Panel"
                  intro='The Owner Panel is the central management hub for restaurant entrepreneurs. Since SavoryOps uses a SaaS multi-tenant architecture, every owner operates within their own isolated environment (separate database and subdomain), ensuring that their business data is secure and professional.'
                  subSections={[
                    {
                      title: '1. Tenant Infrastructure & Identity',
                      points: [
                        'Isolated Ecosystem: Upon registration, the owner is granted a unique database and a custom subdomain (e.g., marcussterling.savoryops.net).',
                        'Professional Branding: Owners can manage multiple Businesses (Restaurant Brands) and multiple Branches under a single account, depending on their subscription plan.'
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-tenant-infra-identity-fiscal',
                      points: [
                        'Fiscal Management: Owners set their own Fiscal Year. If a year ends, the system automatically generates the next one to ensure continuous revenue tracking.'
                      ],
                      figures: [
                        {
                          src: ownerScreenshot22,
                          alt: 'Owner fiscal year settings list showing active and expired fiscal periods',
                          caption: 'Reference: Fiscal management with automatic year progression for revenue tracking'
                        }
                      ]
                    },
                    {
                      title: '2. Restaurant & Branch Operations',
                      intro: 'The owner has granular control over the physical and digital setup of their restaurants:',
                      points: [
                        'Business Profile: Add business names, emails, social media links, and gallery images.'
                      ],
                      figures: [
                        {
                          src: ownerScreenshot1,
                          alt: 'Owner add business form with name, email, social links, and gallery image upload',
                          caption: 'Reference: Owner business profile setup with contact and social media details'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-restaurant-branch-operations-rest',
                      points: [
                        {
                          text: 'Branch Management:',
                          children: [
                            'Set branch-specific Order Types (currently focused on Dine-In).',
                            'Toggle the Table Reservation feature on or off per branch.',
                            'Define Branch Hours which are then visible to customers on the User App.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: ownerScreenshot2,
                          alt: 'Owner add branch form with order type, reservation toggle, and tax/currency fields',
                          caption: 'Reference: Branch management setup with branch details and operational configuration'
                        },
                        {
                          src: ownerScreenshot3,
                          alt: 'Owner branch overview showing branch hours and weekly schedule configuration',
                          caption: 'Reference: Branch hours management visible to customers in the User App'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-restaurant-branch-operations-rest-2',
                      points: [
                        {
                          text: 'Physical Layout:',
                          children: [
                            'Areas: Define zones like Rooftop, Garden, or VIP Lounge.',
                            'Tables: Add tables with seating capacities and generate unique QR codes for each table to enable digital ordering.'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: ownerScreenshot4,
                          alt: 'Owner areas management list with configurable seating zones',
                          caption: 'Reference: Physical layout area configuration for branch zoning'
                        },
                        {
                          src: ownerScreenshot5,
                          alt: 'Owner tables management list with seating capacity and branch mapping',
                          caption: 'Reference: Table setup with capacities and QR-enabled ordering structure'
                        }
                      ]
                    },
                    {
                      title: '3. Menu & Inventory Engineering',
                      intro: 'Owners build their digital catalog through a tiered system:',
                      points: [
                        'Menu & Categories: Organize food by cuisines (Italian, Indian) and categories (Starters, Main Course).'
                      ],
                      figures: [
                        {
                          src: ownerScreenshot7,
                          alt: 'Owner menu list showing cuisine menus and status management',
                          caption: 'Reference: Menu management for organizing food by cuisine'
                        },
                        {
                          src: ownerScreenshot8,
                          alt: 'Owner item category list showing category grouping and status controls',
                          caption: 'Reference: Category management for structuring menu sections'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-menu-inventory-engineering-rest-addons',
                      points: [
                        'Add-on Management: Create customizations like Extra Cheese or Spicy with specific pricing.'
                      ],
                      figures: [
                        {
                          src: ownerScreenshot6,
                          alt: 'Owner add-ons list with customization names, prices, and status controls',
                          caption: 'Reference: Add-on management for menu customizations and pricing'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-menu-inventory-engineering-rest',
                      points: [
                        'Itemization: Add items with descriptions, preparation times, and images. Owners can assign different prices for the same item across different branches.'
                      ],
                      figures: [
                        {
                          src: ownerScreenshot10,
                          alt: 'Owner item list showing menu items with categories, branches, and status controls',
                          caption: 'Reference: Itemization management for branch-wise menu item configuration'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-menu-inventory-engineering-rest-deals',
                      points: [
                        {
                          text: 'Deals & Bundles:',
                          children: [
                            'Combo Meals: Group multiple items together.',
                            'Unlimited Meals: Set Session-based meals (Breakfast/Lunch) with specific availability (Always, Custom Date, or Weekly).'
                          ]
                        }
                      ],
                      figures: [
                        {
                          src: ownerScreenshot9,
                          alt: 'Owner deals and bundles list with combo and unlimited meal configurations',
                          caption: 'Reference: Deals and bundles management for combo and unlimited meals'
                        },
                        {
                          src: ownerScreenshot11,
                          alt: 'Owner add deals and bundles form with combo or unlimited configuration options',
                          caption: 'Reference: Deals and bundles creation form with availability and item mapping'
                        }
                      ]
                    },
                    {
                      title: '4. Staffing & Role Delegation',
                      intro: 'Owners act as the Admin for their employees:',
                      points: [
                        'Employee Linking: Owners verify an Employee ID and assign them to a specific Branch and Role (Waiter, Cashier, Host, Chef, or Head Chef).',
                        'Access Control: The system automatically restricts the Employee App features based on the role assigned by the owner.'
                      ],
                      figures: [
                        {
                          src: ownerScreenshot12,
                          alt: 'Owner employee management list showing branch assignment, role mapping, and status controls',
                          caption: 'Reference: Staffing and role delegation management in the Owner panel'
                        }
                      ]
                    },
                    {
                      title: '5. Analytics & Reporting',
                      intro: 'The Owner Panel provides deep insights into business performance, filterable by Branch and Fiscal Year:',
                      points: [
                        'Dashboard: Real-time metrics for Order Counts, Tax, Earning, and Revenue. Includes monthly growth graphs and a live view of Currently Running orders.'
                      ],
                      figures: [
                        {
                          src: ownerScreenshot13,
                          alt: 'Owner dashboard showing live business metrics, monthly revenue graph, and running order details',
                          caption: 'Reference: Analytics dashboard with real-time KPIs and order visibility'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-analytics-reporting-rest',
                      points: [
                        'KOT & Order Logs: Complete visibility into the kitchen performance and order history.'
                      ],
                      figures: [
                        {
                          src: ownerScreenshot14,
                          alt: 'Owner KOT view displaying live kitchen tickets and order status progression',
                          caption: 'Reference: KOT and order log monitoring for kitchen operations'
                        },
                        {
                          src: ownerScreenshot15,
                          alt: 'Owner order logs table showing order lifecycle, payment status, and assigned employee',
                          caption: 'Reference: Order log visibility with status tracking and payment details'
                        },
                        {
                          src: ownerScreenshot16,
                          alt: 'Owner order details view with KOT line items, status badges, and payment summary',
                          caption: 'Reference: Detailed order log record with KOT and billing breakdown'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-analytics-reporting-rest-reports',
                      points: [
                        {
                          text: 'Comprehensive Reports:',
                          children: [
                            'Revenue Reports: Order-wise financial breakdowns.',
                            'Branch-wise/Date-wise Reports: Comparison of performance across different locations and timeframes.',
                            'Review Management: View and monitor customer feedback for each branch.'
                          ],
                          figures: [
                            {
                              src: ownerScreenshot23,
                              alt: 'Owner revenue report table with branch and fiscal year filters plus PDF export option',
                              caption: 'Reference: Revenue Reports section showing order-wise financial breakdown and export support'
                            },
                            {
                              src: ownerScreenshot24,
                              alt: 'Owner branch-wise report table showing branch-level order totals, tax, and amount with export option',
                              caption: 'Reference: Branch-wise report view for cross-location performance comparison'
                            },
                            {
                              src: ownerScreenshot25,
                              alt: 'Owner review management table listing customer ratings and feedback by order',
                              caption: 'Reference: Review management report for monitoring branch-wise customer feedback'
                            }
                          ]
                        },
                        'Data Portability: All major reports (Orders, Reservations, Employee lists, etc.) can be exported as PDFs.'
                      ]
                    },
                    {
                      title: '6. Subscription & Settings',
                      points: [
                        'Subscription Management: View active plan details, upgrade via Razorpay, and access billing history.'
                      ],
                      figures: [
                        {
                          src: ownerScreenshot19,
                          alt: 'Owner subscription purchase page showing active plans, pricing, and Razorpay payment selection',
                          caption: 'Reference: Subscription management with plan upgrade and billing flow'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-subscription-settings-rest',
                      points: [
                        'Localization: Owners can set their own Timezone and Date/Time formats, ensuring the panel reflects their local operational time.'
                      ],
                      figures: [
                        {
                          src: ownerScreenshot20,
                          alt: 'Owner settings page showing timezone, date format, and time format localization options',
                          caption: 'Reference: Localization settings for timezone and date/time format preferences'
                        }
                      ]
                    },
                    {
                      continuation: true,
                      stepKey: 'owner-subscription-settings-rest-tax',
                      points: [
                        'Tax Configuration: Define specific tax rules to be applied to orders at the branch level.'
                      ],
                      figures: [
                        {
                          src: ownerScreenshot21,
                          alt: 'Owner tax settings list displaying configured tax rules, percentages, and status controls',
                          caption: 'Reference: Tax configuration management for branch-level order taxation'
                        }
                      ]
                    }
                  ]}
                />

                <DocSection
                  id="user-app"
                  title="9. User App"
                  intro='The User App (Customer App) is a comprehensive, multi-language interface designed to give customers complete autonomy over their dining experience. It bridges the gap between digital convenience and physical restaurant service through real-time ordering and reservation systems.'
                  subSections={[
                    {
                      title: '1. Access & Security',
                      points: [
                        'Authentication Options: Customers can sign in via Email/Password or Mobile Number + OTP.',
                        'Seamless Registration: New users provide basic profile details (Name, Email, Mobile, Gender). A secure password (8-14 characters, mixed casing, and digits) is required for account integrity.',
                        'Guest Mode: Non-logged-in users can browse menus and businesses but must create an account to finalize an order or confirm a reservation.'
                      ]
                    },
                    {
                      title: '2. Discovery & Navigation',
                      points: [
                        'Business & Branch Exploration: Before selecting a specific location, customers can browse a list of available business brands and their respective branches.',
                        {
                          text: 'Smart Header Features:',
                          children: [
                            'Location/Branch Selector: Manually choose a restaurant and branch (Top-left).',
                            'QR Scanner: Quickly scan a Table QR Code to instantly sync with a specific table (Top-right).'
                          ]
                        },
                        'Detailed Listings: Each branch page displays operational hours, physical address, and community reviews/ratings.'
                      ]
                    },
                    {
                      title: '3. Digital Menu Experience',
                      intro: 'The app transforms physical menus into a dynamic, categorized digital catalog:',
                      points: [
                        'Rich Categories: Cuisines (Italian, Indian, etc.) and categories are used to organize items.',
                        'Combo & Unlimited Meals: Dedicated lists for bundled deals and session-based unlimited meals (Breakfast/Lunch/Dinner).',
                        'Item Customization: When adding an item, customers can select Add-ons (e.g., extra cheese) and view transparent pricing.',
                        'Currency Intelligence: All prices automatically adapt to the currency set by the owner for that specific branch.'
                      ]
                    },
                    {
                      title: '4. The Digital Cart & Checkout',
                      points: [
                        'Cart Management: Customers can adjust quantities, view add-on details, and provide Special Instructions for the kitchen.',
                        {
                          text: 'Financial Transparency: Before ordering, the cart shows a detailed breakdown.',
                          children: [
                            'Item Total',
                            'Tax Amount',
                            'Grand Total'
                          ]
                        },
                        'Order Validation: The Place Order button is only enabled once a Table QR Code has been scanned, ensuring the order is tied to a physical location.'
                      ]
                    },
                    {
                      title: '5. Order Management & Interaction',
                      points: [
                        'Live Tracking: Customers can view the status of their order (Pending -> Accepted -> Preparing -> Served).',
                        'Dynamic Modality: As long as the order is Open, an Add New button allows customers to order more items without starting a new ticket.',
                        {
                          text: 'Post-Dining Features:',
                          children: [
                            'Invoice Download: Once the order is paid (via the Cashier), the customer can download a PDF Invoice.',
                            'Reviews: Customers can rate the branch and provide feedback on their experience.'
                          ]
                        }
                      ]
                    },
                    {
                      title: '6. Personalization & Settings',
                      points: [
                        'Language Support: The app is available in 8 languages (including Dutch, French, German, Greek, Italian, Russian, Spanish, and English).',
                        'Localization: Customers can set their preferred Timezone and Date/Time format, which updates all timestamps across the app.',
                        {
                          text: 'Profile Management:',
                          children: [
                            'Reservation Tracking: View upcoming and past table bookings.',
                            'Review History: Manage and view feedback provided to restaurants.',
                            'Data Privacy: A Delete Account option allows users to remove their personal details, though order history is retained on the owner side for accounting.'
                          ]
                        }
                      ]
                    },
                    {
                      title: '7. Table Reservation (Pick Spot vs. Quick Seat)',
                      intro: 'Customers can book a table in two ways:',
                      points: [
                        {
                          text: 'Pick Spot: Select a specific area (e.g., Garden) and a specific table number.'
                        },
                        {
                          text: 'Quick Seat: Simply enter the number of guests; the Host manages the table assignment.'
                        },
                        {
                          text: 'Note: Only branches with the Reservation toggle active in the Owner Panel are eligible for booking.'
                        }
                      ]
                    }
                  ]}
                />

                <DocSection
                  id="employee-app"
                  title="10. Employee App"
                  intro='The SavoryOps Employee App is a specialized, role-contingent tool designed to streamline restaurant operations. Unlike the User App, the Employee App interface is dynamic; it completely transforms based on the Role and Branch assigned to the employee by the Owner.'
                  subSections={[
                    {
                      title: '1. Role-Based Specialized Modules',
                      intro: 'The app serves five distinct professional roles, each with a unique dashboard and set of responsibilities:',
                      points: [
                        {
                          text: 'Waiter (Front-of-House Lead):',
                          children: [
                            'Order Creation: Scans Table QR codes to place orders on behalf of customers.',
                            'Customer Integration: If a customer is new, the Waiter enters their mobile number, and the system automatically creates a Customer Account.',
                            'Order Management: Features two tabs - My Order (accepted orders) and New Order (pending tickets).',
                            'Table Linking: Can add multiple tables to a single order for large groups.'
                          ]
                        },
                        {
                          text: 'Head Chef (Kitchen Commander):',
                          children: [
                            'Kitchen Dashboard: Views all incoming KOT (Kitchen Order Tickets).',
                            'Delegation: Assigns specific items or full KOTs to various Chefs or themselves.',
                            'KOT Status Management: Updates tickets from Confirmed -> Running -> Ready to Serve.',
                            'Analytics: A dedicated dashboard showing KOT counts and performance graphs over the last 12 hours.'
                          ]
                        },
                        {
                          text: 'Chef (Production Specialist):',
                          children: [
                            'Task List: Accesses the My Assignments page to see items assigned specifically to them.',
                            'Status Updates: Moves items from Assigned -> Preparing -> Ready to Serve.'
                          ]
                        },
                        {
                          text: 'Cashier (Financial Controller):',
                          children: [
                            'Payment Processing: Manages the final stage of the order by manually updating payment status to Paid.',
                            'Financial Dashboard: Tracks pending amounts, paid amounts, and order counts (Pending, Accepted, Completed).'
                          ]
                        },
                        {
                          text: 'Host (Guest Relations):',
                          children: [
                            'Reservation Management: Views current-day table bookings.',
                            'Floor Awareness: A specialized Home Page showing all branch tables by Area to manage seating flow effectively.'
                          ]
                        }
                      ]
                    },
                    {
                      title: '2. Core Operational Logic',
                      points: [
                        '12-Hour Active Window: To maintain a clean and fast workspace, the app only displays Order, KOT, and Assignment details for 12 hours. After this, data is archived and hidden from the active list.',
                        'The Idle Onboarding State: Upon signing up, employees see no branch or order data. Access is only unlocked once an Owner verifies their Employee ID and assigns them a branch and role.',
                        'QR Integration: Employees (Waiters) use the camera to scan table QR codes for instant order syncing and table status updates.'
                      ]
                    },
                    {
                      title: '3. Common Professional Pages',
                      intro: 'Regardless of their role, all employees have access to these management tools:',
                      points: [
                        'Job History: A record of every branch the employee has worked at, including joining dates.',
                        'Profile Management: Displays the employee name and their specific Assigned Role prominently.',
                        {
                          text: 'Personalization Settings:',
                          children: [
                            'Language: Choose from 8 languages to match their comfort level.',
                            'Localization: Set personal Timezone and Date/Time formats.',
                            'Security: Change passwords and manage account deletion (requires password confirmation).'
                          ]
                        },
                        'Information Hub: Quick access to the platform Privacy Policy and About Us documentation.'
                      ]
                    }
                  ]}
                />

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} className="!pt-2">
                  <AppButton to="/features" endIcon={<ArrowForwardRoundedIcon />}>
                    Explore SaaS Features
                  </AppButton>
                  <AppButton to="/contact" variant="outlined" color="secondary">
                    Contact Sales Team
                  </AppButton>
                </Stack>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}