import { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Tabs,
  Tab,
  Button,
  ButtonGroup
} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import FunctionsIcon from '@mui/icons-material/Functions';
import StorefrontIcon from '@mui/icons-material/Storefront';

/**
 * Reusable high-contrast dark theme currency input
 */
const CurrencyInput = ({ label, value, onChange, helperText, currency }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.6 }}>
    <Typography
      component="label"
      sx={{
        color: '#e2e8f0',
        fontSize: '0.825rem',
        fontWeight: 600,
        letterSpacing: '0.2px',
      }}
    >
      {label}
    </Typography>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#090e0b',
        border: '1px solid rgba(34, 197, 94, 0.28)',
        borderRadius: '8px',
        px: 1.5,
        height: 42,
        transition: 'all 0.2s ease',
        '&:focus-within': {
          borderColor: '#10b981',
          boxShadow: '0 0 0 3px rgba(16, 185, 129, 0.2)',
        },
        '&:hover': {
          borderColor: 'rgba(34, 197, 94, 0.6)',
        },
      }}
    >
      <Typography
        sx={{
          color: '#34d399',
          fontWeight: 700,
          fontSize: '0.95rem',
          mr: 1,
          userSelect: 'none',
        }}
      >
        {currency}
      </Typography>
      <Box
        component="input"
        type="number"
        value={value}
        onChange={onChange}
        sx={{
          flex: 1,
          bgcolor: 'transparent',
          border: 'none',
          outline: 'none',
          color: '#ffffff',
          fontSize: '0.95rem',
          fontWeight: 600,
          fontFamily: 'inherit',
          width: '100%',
          '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          MozAppearance: 'textfield',
        }}
      />
    </Box>
    {helperText && (
      <Typography sx={{ color: '#94a3b8', fontSize: '0.74rem' }}>
        {helperText}
      </Typography>
    )}
  </Box>
);

/**
 * Interactive Food Cost & Margin Calculator
 * Used on /resources/food-cost-percentage-guide to drive high dwell time,
 * provide direct utility to restaurant operators, and rank #1 for calculation & equation queries.
 */
const FoodCostCalculator = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currency, setCurrency] = useState('$');

  // Tab 0: Period-based Food Cost (COGS)
  const [beginningInv, setBeginningInv] = useState('12000');
  const [purchases, setPurchases] = useState('18000');
  const [endingInv, setEndingInv] = useState('14000');
  const [totalSales, setTotalSales] = useState('52000');
  const [selectedPeriodPreset, setSelectedPeriodPreset] = useState('Casual Dining');

  // Tab 1: Dish / Recipe-level Costing
  const [recipeCost, setRecipeCost] = useState('4.80');
  const [menuPrice, setMenuPrice] = useState('16.00');
  const [selectedDishPreset, setSelectedDishPreset] = useState(null);

  // Presets for Period Costing
  const periodPresets = [
    { label: 'QSR / Fast Food', beg: '10000', pur: '22000', end: '11000', sales: '80000' },
    { label: 'Casual Dining', beg: '12000', pur: '18000', end: '14000', sales: '52000' },
    { label: 'Fine Dining', beg: '25000', pur: '35000', end: '26000', sales: '100000' },
    { label: 'Pizzeria / Cafe', beg: '8000', pur: '12000', end: '8500', sales: '52000' }
  ];

  // Presets for Dish Costing
  const dishPresets = [
    { label: 'QSR Burger Combo', cost: '3.80', price: '14.50' },
    { label: 'Casual Pasta', cost: '5.20', price: '18.00' },
    { label: 'Prime Steak Cut', cost: '12.50', price: '36.00' },
    { label: 'Woodfired Pizza', cost: '2.50', price: '13.00' }
  ];

  // Calculations for Period-based Food Cost
  const periodResults = useMemo(() => {
    const beg = parseFloat(beginningInv) || 0;
    const pur = parseFloat(purchases) || 0;
    const end = parseFloat(endingInv) || 0;
    const sales = parseFloat(totalSales) || 0;

    const cogs = Math.max(0, beg + pur - end);
    const percentage = sales > 0 ? ((cogs / sales) * 100).toFixed(1) : '0.0';
    const grossProfit = Math.max(0, sales - cogs);
    const grossMargin = sales > 0 ? ((grossProfit / sales) * 100).toFixed(1) : '0.0';

    let healthStatus = 'optimal';
    let statusMessage = 'Healthy Food Cost Range (28% - 32%)';
    let statusColor = '#10b981';

    const numPct = parseFloat(percentage);
    if (numPct < 25) {
      healthStatus = 'low';
      statusMessage = 'High Margin / Low COGS (Typical for QSR, Pizza/Pasta & Cafes)';
      statusColor = '#059669';
    } else if (numPct > 34) {
      healthStatus = 'high';
      statusMessage = 'Above Industry Benchmark — Check for portion waste, unrecorded comps, or underpricing';
      statusColor = '#ef4444';
    }

    return {
      beg,
      pur,
      end,
      sales,
      rawCogs: cogs,
      cogs: cogs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      percentage,
      grossProfit: grossProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      grossMargin,
      healthStatus,
      statusMessage,
      statusColor
    };
  }, [beginningInv, purchases, endingInv, totalSales]);

  // Calculations for Recipe-level Costing
  const dishResults = useMemo(() => {
    const cost = parseFloat(recipeCost) || 0;
    const price = parseFloat(menuPrice) || 0;

    const percentage = price > 0 ? ((cost / price) * 100).toFixed(1) : '0.0';
    const contributionMargin = Math.max(0, price - cost).toFixed(2);
    const grossMargin = price > 0 ? (((price - cost) / price) * 100).toFixed(1) : '0.0';

    return {
      cost,
      price,
      percentage,
      contributionMargin,
      grossMargin
    };
  }, [recipeCost, menuPrice]);


  const leftCardSx = {
    height: '100%',
    borderRadius: 3,
    p: { xs: 2, sm: 2.5 },
    bgcolor: '#131f17',
    border: '1px solid rgba(34, 197, 94, 0.22)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
  };

  const rightCardSx = {
    height: '100%',
    borderRadius: 3,
    background: 'linear-gradient(135deg, #0d1b13 0%, #132b1d 100%)',
    border: '1px solid rgba(34, 197, 94, 0.22)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.45)',
    color: '#ffffff',
    p: { xs: 2, sm: 2.5 },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  return (
    <Box className="food-cost-calculator-card" sx={{ my: 6 }}>
      <Box className="calc-header" sx={{ textAlign: 'center', mb: 3 }}>
        <Chip
          icon={<CalculateIcon sx={{ color: '#34d399 !important' }} />}
          label="Live Interactive Tool • 2026 Edition"
          variant="outlined"
          sx={{
            mb: 1.5,
            fontWeight: 700,
            color: '#34d399',
            borderColor: 'rgba(34, 197, 94, 0.35)',
            bgcolor: 'rgba(34, 197, 94, 0.1)'
          }}
        />
        <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800, mb: 1, color: '#ffffff' }}>
          Interactive Food Cost Percentage Calculator
        </Typography>
        <Typography variant="body1" sx={{ color: '#94a3b8', maxWidth: 740, mx: 'auto' }}>
          Compute your Cost of Goods Sold (COGS), food cost percentage, and gross profit margins instantly. Benchmark results across Quick Service (QSR), casual dining, and fine dining standards.
        </Typography>

        {/* Currency Selector */}
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
          <Typography variant="caption" sx={{ fontWeight: 600, color: '#94a3b8' }}>
            CURRENCY:
          </Typography>
          <ButtonGroup size="small" variant="outlined" sx={{ bgcolor: 'rgba(0, 0, 0, 0.4)', borderRadius: 1.5, p: 0.3, border: '1px solid rgba(34, 197, 94, 0.2)' }}>
            {['$', '£', '€', 'AED', 'SAR'].map((curr) => (
              <Button
                key={curr}
                variant={currency === curr ? 'contained' : 'text'}
                onClick={() => setCurrency(curr)}
                sx={{
                  minWidth: 44,
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  color: currency === curr ? '#ffffff' : '#94a3b8',
                  bgcolor: currency === curr ? '#10b981 !important' : 'transparent',
                  border: 'none !important',
                  borderRadius: 1,
                  '&:hover': {
                    bgcolor: currency === curr ? '#059669 !important' : 'rgba(34, 197, 94, 0.15)',
                    color: '#ffffff',
                  }
                }}
              >
                {curr}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3, display: 'flex', justifyContent: 'center' }}>
        <Tabs
          value={activeTab}
          onChange={(_, val) => setActiveTab(val)}
          aria-label="food cost calculator modes"
          sx={{
            '& .MuiTab-root': {
              color: '#94a3b8',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '0.95rem',
              '&.Mui-selected': {
                color: '#34d399',
              },
            },
            '& .MuiTabs-indicator': {
              bgcolor: '#10b981',
              height: 3,
              borderRadius: '3px 3px 0 0',
            },
          }}
        >
          <Tab icon={<TrendingUpIcon />} iconPosition="start" label="Overall Period Cost (COGS)" />
          <Tab icon={<RestaurantMenuIcon />} iconPosition="start" label="Dish / Recipe-Level Cost" />
        </Tabs>
      </Box>

      {/* Mode 1: Period-Based Costing */}
      {activeTab === 0 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            alignItems: 'stretch'
          }}
        >
          <Card variant="outlined" sx={leftCardSx}>
            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                  1. Enter Inventory &amp; Sales ({currency})
                </Typography>
              </Box>

              {/* Concept Presets */}
              <Box sx={{ mb: 2.5 }}>
                <Typography variant="caption" sx={{ color: '#e2e8f0', display: 'block', mb: 1, fontWeight: 700, letterSpacing: '0.5px' }}>
                  Quick Restaurant Presets:
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 1.25,
                  }}
                >
                  {periodPresets.map((preset) => {
                    const isSelected = selectedPeriodPreset === preset.label;
                    return (
                      <Box
                        key={preset.label}
                        onClick={() => {
                          setSelectedPeriodPreset(preset.label);
                          setBeginningInv(preset.beg);
                          setPurchases(preset.pur);
                          setEndingInv(preset.end);
                          setTotalSales(preset.sales);
                        }}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          p: '8px 12px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          border: isSelected ? '1px solid #10b981' : '1px solid rgba(34, 197, 94, 0.25)',
                          bgcolor: isSelected ? 'rgba(16, 185, 129, 0.2)' : 'rgba(34, 197, 94, 0.08)',
                          boxShadow: isSelected ? '0 0 12px rgba(16, 185, 129, 0.25)' : 'none',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: isSelected ? 'rgba(16, 185, 129, 0.25)' : 'rgba(34, 197, 94, 0.16)',
                            borderColor: '#34d399',
                            transform: 'translateY(-1px)',
                          },
                        }}
                      >
                        <StorefrontIcon sx={{ fontSize: 16, color: '#34d399', flexShrink: 0 }} />
                        <Typography
                          sx={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: isSelected ? '#ffffff' : '#e2e8f0',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {preset.label}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <CurrencyInput
                  label="Beginning Inventory Value"
                  value={beginningInv}
                  onChange={(e) => {
                    setBeginningInv(e.target.value);
                    setSelectedPeriodPreset(null);
                  }}
                  helperText="Total raw ingredient value at start of period"
                  currency={currency}
                />

                <CurrencyInput
                  label="Purchases During Period"
                  value={purchases}
                  onChange={(e) => {
                    setPurchases(e.target.value);
                    setSelectedPeriodPreset(null);
                  }}
                  helperText="Total vendor invoices & ingredient deliveries received"
                  currency={currency}
                />

                <CurrencyInput
                  label="Ending Inventory Value"
                  value={endingInv}
                  onChange={(e) => {
                    setEndingInv(e.target.value);
                    setSelectedPeriodPreset(null);
                  }}
                  helperText="Physical count value remaining at period close"
                  currency={currency}
                />

                <CurrencyInput
                  label="Total Food Sales Revenue"
                  value={totalSales}
                  onChange={(e) => {
                    setTotalSales(e.target.value);
                    setSelectedPeriodPreset(null);
                  }}
                  helperText="Gross food sales before sales tax"
                  currency={currency}
                />
              </Box>
            </CardContent>
          </Card>

          <Card sx={rightCardSx}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="overline" sx={{ color: '#94a3b8', letterSpacing: 1 }}>
                  CALCULATION RESULTS
                </Typography>
                <Chip
                  icon={<FunctionsIcon sx={{ fontSize: '14px !important', color: '#38bdf8 !important' }} />}
                  label="Live COGS Equation"
                  size="small"
                  sx={{ bgcolor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 600, fontSize: '0.75rem' }}
                />
              </Box>

              <Box sx={{ my: 2 }}>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Food Cost Percentage
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    color: periodResults.statusColor,
                    lineHeight: 1.1,
                    my: 0.5
                  }}
                >
                  {periodResults.percentage}%
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                  {parseFloat(periodResults.percentage) > 34 ? (
                    <WarningAmberIcon sx={{ color: '#ef4444', fontSize: 18 }} />
                  ) : (
                    <CheckCircleIcon sx={{ color: '#10b981', fontSize: 18 }} />
                  )}
                  <Typography variant="caption" sx={{ color: '#e2e8f0', fontWeight: 600 }}>
                    {periodResults.statusMessage}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 2,
                  pt: 2,
                  mt: 2,
                  borderTop: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Cost of Goods Sold (COGS)
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                    {currency}{periodResults.cogs}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Gross Food Profit
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                    {currency}{periodResults.grossProfit}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Gross Margin
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                    {periodResults.grossMargin}%
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Target Range
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#38bdf8' }}>
                    28% – 32%
                  </Typography>
                </Box>
              </Box>

              {/* Step-by-Step Equation Walkthrough */}
              <Box sx={{ mt: 2.5, p: 1.5, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.08)' }}>
                <Typography variant="caption" sx={{ color: '#38bdf8', fontWeight: 700, display: 'block', mb: 0.5 }}>
                  STEP-BY-STEP CALCULATION BREAKDOWN:
                </Typography>
                <Typography variant="caption" sx={{ color: '#cbd5e1', display: 'block', fontFamily: 'monospace' }}>
                  1. COGS = {currency}{periodResults.beg} + {currency}{periodResults.pur} - {currency}{periodResults.end} = {currency}{periodResults.cogs}
                </Typography>
                <Typography variant="caption" sx={{ color: '#cbd5e1', display: 'block', fontFamily: 'monospace' }}>
                  2. Food Cost % = ({currency}{periodResults.cogs} ÷ {currency}{periodResults.sales}) × 100 = {periodResults.percentage}%
                </Typography>
              </Box>
            </CardContent>

            <Box sx={{ p: 2, pt: 0 }}>
              <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                Standard Period Formula: [ (Beginning Inv + Purchases - Ending Inv) ÷ Sales ] × 100
              </Typography>
            </Box>
          </Card>
        </Box>
      )}

      {/* Mode 2: Dish / Recipe-Level Costing */}
      {activeTab === 1 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            alignItems: 'stretch'
          }}
        >
          <Card variant="outlined" sx={leftCardSx}>
            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#ffffff' }}>
                2. Enter Plate Cost &amp; Menu Price ({currency})
              </Typography>

              {/* Dish Presets */}
              <Box sx={{ mb: 2.5 }}>
                <Typography variant="caption" sx={{ color: '#e2e8f0', display: 'block', mb: 1, fontWeight: 700, letterSpacing: '0.5px' }}>
                  Quick Dish Presets:
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 1.25,
                  }}
                >
                  {dishPresets.map((preset) => {
                    const isSelected = selectedDishPreset === preset.label;
                    return (
                      <Box
                        key={preset.label}
                        onClick={() => {
                          setSelectedDishPreset(preset.label);
                          setRecipeCost(preset.cost);
                          setMenuPrice(preset.price);
                        }}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          p: '8px 12px',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          border: isSelected ? '1px solid #10b981' : '1px solid rgba(34, 197, 94, 0.25)',
                          bgcolor: isSelected ? 'rgba(16, 185, 129, 0.2)' : 'rgba(34, 197, 94, 0.08)',
                          boxShadow: isSelected ? '0 0 12px rgba(16, 185, 129, 0.25)' : 'none',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: isSelected ? 'rgba(16, 185, 129, 0.25)' : 'rgba(34, 197, 94, 0.16)',
                            borderColor: '#34d399',
                            transform: 'translateY(-1px)',
                          },
                        }}
                      >
                        <RestaurantMenuIcon sx={{ fontSize: 16, color: '#34d399', flexShrink: 0 }} />
                        <Typography
                          sx={{
                            fontSize: '0.78rem',
                            fontWeight: 600,
                            color: isSelected ? '#ffffff' : '#e2e8f0',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {preset.label}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.25 }}>
                <CurrencyInput
                  label="Raw Recipe / Portion Cost"
                  value={recipeCost}
                  onChange={(e) => {
                    setRecipeCost(e.target.value);
                    setSelectedDishPreset(null);
                  }}
                  helperText="Total ingredient cost for a single plate (protein + side + sauce + garnish)"
                  currency={currency}
                />

                <CurrencyInput
                  label="Menu Selling Price"
                  value={menuPrice}
                  onChange={(e) => {
                    setMenuPrice(e.target.value);
                    setSelectedDishPreset(null);
                  }}
                  helperText="Customer selling price on menu (excluding taxes)"
                  currency={currency}
                />
              </Box>
            </CardContent>
          </Card>

          <Card sx={rightCardSx}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="overline" sx={{ color: '#94a3b8', letterSpacing: 1 }}>
                  PLATE-LEVEL MARGIN
                </Typography>
                <Chip
                  icon={<FunctionsIcon sx={{ fontSize: '14px !important', color: '#38bdf8 !important' }} />}
                  label="Dish Equation"
                  size="small"
                  sx={{ bgcolor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', fontWeight: 600, fontSize: '0.75rem' }}
                />
              </Box>

              <Box sx={{ my: 2 }}>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Dish Food Cost Percentage
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    color: parseFloat(dishResults.percentage) > 34 ? '#ef4444' : '#10b981',
                    lineHeight: 1.1,
                    my: 0.5
                  }}
                >
                  {dishResults.percentage}%
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 2,
                  pt: 2,
                  mt: 2,
                  borderTop: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Gross Margin per Plate
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                    {currency}{dishResults.contributionMargin}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                    Gross Margin %
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff' }}>
                    {dishResults.grossMargin}%
                  </Typography>
                </Box>
              </Box>

              {/* Step-by-Step Plate Breakdown */}
              <Box sx={{ mt: 2.5, p: 1.5, bgcolor: 'rgba(255, 255, 255, 0.05)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.08)' }}>
                <Typography variant="caption" sx={{ color: '#38bdf8', fontWeight: 700, display: 'block', mb: 0.5 }}>
                  RECIPE EQUATION BREAKDOWN:
                </Typography>
                <Typography variant="caption" sx={{ color: '#cbd5e1', display: 'block', fontFamily: 'monospace' }}>
                  Dish Cost % = ({currency}{dishResults.cost} ÷ {currency}{dishResults.price}) × 100 = {dishResults.percentage}%
                </Typography>
                <Typography variant="caption" sx={{ color: '#cbd5e1', display: 'block', fontFamily: 'monospace' }}>
                  Profit Margin = {currency}{dishResults.price} - {currency}{dishResults.cost} = {currency}{dishResults.contributionMargin} ({dishResults.grossMargin}%)
                </Typography>
              </Box>
            </CardContent>

            <Box sx={{ p: 2, pt: 0 }}>
              <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                Standard Plate Formula: (Raw Recipe Cost ÷ Menu Selling Price) × 100
              </Typography>
            </Box>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default FoodCostCalculator;
