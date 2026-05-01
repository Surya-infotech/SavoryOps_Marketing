# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project Setup Process

### AWS SNS Setup (up to EC2 instance)

1. Sign in to AWS Console and choose the correct region for your deployment.
2. Open IAM and create/update a user or role with permissions for SNS and EC2 access.
3. Open Amazon SNS and create a topic (Standard or FIFO based on your use case).
4. Add at least one subscription to the topic (Email, SMS, or HTTPS endpoint) and confirm it if required.
5. Note the SNS topic ARN, as it is required by the application configuration.
6. Create or select an EC2 key pair for secure SSH access.
7. Launch an EC2 instance with your required AMI, instance type, and VPC/subnet settings.
8. Attach a security group that allows the required inbound/outbound traffic (for example SSH on port 22 and app port as needed).
9. Ensure the EC2 instance role or credentials can publish to the SNS topic.

The next steps (application deployment, environment variables, and SNS publish testing from the app) can be added after this EC2 setup stage.

## Website Content Documentation

For Owner Panel, Super Admin, and feature-wise website content documentation, see:

- `docs/website-content-documentation.md`
