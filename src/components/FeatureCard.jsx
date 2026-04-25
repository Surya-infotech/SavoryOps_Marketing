import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import AppIcon from './ui/AppIcon';
import AppButton from './ui/AppButton';

export default function FeatureCard({ feature, hideLink = false }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-card border border-slate-200 card-hover text-center flex flex-col items-center h-full">
      <div className={`w-20 h-20 rounded-2xl ${feature.color} flex items-center justify-center text-3xl mb-6 shadow-sm`}>
        {feature.icon}
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
      <p className="flex-auto text-slate-500 mb-6">{feature.desc}</p>
      
      {!hideLink && (
        <div className="mt-auto">
          <AppButton
            to={`/features/${feature.slug}`}
            variant="text"
            color="primary"
            className="!px-3 !py-1.5"
            endIcon={
              <AppIcon tone="primary" className="!w-7 !h-7">
                <ArrowForwardRoundedIcon />
              </AppIcon>
            }
          >
            View Detail
          </AppButton>
        </div>
      )}
    </div>
  );
}