interface ExampleComponentProps {
  title: string;
  description: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({
  title,
  description,
  variant = 'primary',
}) => {
  const variantStyles = {
    primary: 'border-primary-200 bg-primary-50 text-primary-800',
    secondary: 'border-gray-200 bg-gray-50 text-gray-800',
    success: 'border-green-200 bg-green-50 text-green-800',
    warning: 'border-yellow-200 bg-yellow-50 text-yellow-800',
    error: 'border-red-200 bg-red-50 text-red-800',
  };

  return (
    <div
      className={`card border-l-4 ${variantStyles[variant]} transition-all duration-300 hover:scale-105`}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              variant === 'primary'
                ? 'bg-primary-100'
                : variant === 'secondary'
                ? 'bg-gray-100'
                : variant === 'success'
                ? 'bg-green-100'
                : variant === 'warning'
                ? 'bg-yellow-100'
                : 'bg-red-100'
            }`}
          >
            <span className="text-lg">
              {variant === 'primary'
                ? '🔵'
                : variant === 'secondary'
                ? '⚪'
                : variant === 'success'
                ? '✅'
                : variant === 'warning'
                ? '⚠️'
                : '❌'}
            </span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>

          <div className="mt-4 flex space-x-2">
            <button className="btn btn-primary text-sm">
              Acción Principal
            </button>
            <button className="btn btn-secondary text-sm">
              Acción Secundaria
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
