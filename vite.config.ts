import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          privacyPolicy: path.resolve(__dirname, 'privacy-policy.html'),
          disclaimer: path.resolve(__dirname, 'disclaimer.html'),
          terms: path.resolve(__dirname, 'terms.html'),
          contact: path.resolve(__dirname, 'contact.html'),
          bitcoinMacroTrends: path.resolve(__dirname, 'bitcoin-macro-trends.html'),
          ethereumLayer2Scaling: path.resolve(__dirname, 'ethereum-layer2-scaling.html'),
          solanaEcosystemBreakouts: path.resolve(__dirname, 'solana-ecosystem-breakouts.html'),
          zeroKnowledgeProofs: path.resolve(__dirname, 'zero-knowledge-proofs.html'),
          defiYieldDynamics: path.resolve(__dirname, 'defi-yield-dynamics.html'),
          realWorldAssetTokenization: path.resolve(__dirname, 'real-world-asset-tokenization.html'),
          restakingProtocolsSecurity: path.resolve(__dirname, 'restaking-protocols-security.html'),
          depinInfrastructureGrids: path.resolve(__dirname, 'depin-infrastructure-grids.html'),
          crossChainBridgesInteroperability: path.resolve(__dirname, 'cross-chain-bridges-interoperability.html'),
          institutionalWeb3Adoption: path.resolve(__dirname, 'institutional-web3-adoption.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
