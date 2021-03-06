import React from 'react';

import ErrorPageTemplate from './Template/Template';
import Four0FourTemplate from './Four0Four/Four0Four';
import FiveHundredTemplate from './FiveHundred/FiveHundred';
import MaintenanceTemplate from './Maintenance/Maintenance';

interface ErrorTemplateStatic {
  Four0Four: typeof Four0FourTemplate;
  FiveHundred: typeof FiveHundredTemplate;
  Maintenance: typeof MaintenanceTemplate;
}

const ErrorTemplate: ErrorTemplateStatic & React.FC = ({ children }) => (
  <ErrorPageTemplate>{children}</ErrorPageTemplate>
);

ErrorTemplate.Four0Four = Four0FourTemplate;
ErrorTemplate.FiveHundred = FiveHundredTemplate;
ErrorTemplate.Maintenance = MaintenanceTemplate;

export default ErrorTemplate;
