const FIELD_CLASSES =
  'w-full border bg-transparent px-4 py-3 text-[15px] text-forest placeholder:text-forest/35 transition-colors focus-visible:outline-none focus-visible:border-pine'

function FieldWrapper({ id, label, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13.5px] font-medium text-forest/80">
        {label}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-forest/45">{hint}</p>}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-[#a4402a]">
          {error}
        </p>
      )}
    </div>
  )
}

export function TextField({ id, label, error, hint, ...inputProps }) {
  return (
    <FieldWrapper id={id} label={label} error={error} hint={hint}>
      <input
        id={id}
        className={`${FIELD_CLASSES} ${error ? 'border-[#a4402a]' : 'border-forest/20'}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...inputProps}
      />
    </FieldWrapper>
  )
}

export function TextAreaField({ id, label, error, hint, ...textareaProps }) {
  return (
    <FieldWrapper id={id} label={label} error={error} hint={hint}>
      <textarea
        id={id}
        rows={5}
        className={`${FIELD_CLASSES} resize-none ${error ? 'border-[#a4402a]' : 'border-forest/20'}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...textareaProps}
      />
    </FieldWrapper>
  )
}

export function SelectField({ id, label, error, hint, options, placeholder, ...selectProps }) {
  return (
    <FieldWrapper id={id} label={label} error={error} hint={hint}>
      <select
        id={id}
        className={`${FIELD_CLASSES} ${error ? 'border-[#a4402a]' : 'border-forest/20'}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...selectProps}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldWrapper>
  )
}