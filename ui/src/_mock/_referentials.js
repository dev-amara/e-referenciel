import _mock from './_mock';
import { HOST_API } from '../config';

// ----------------------------------------------------------------------

const PATH_MODULE = `${HOST_API}/REFERENTIEL/ANOMALIE_CLOTURE_DE_COMPTE/`;

const _procedures = [
  // ANOMALIE CLOTURE DE COMPTE
  {
    title: 'ANOMALIE CLOTURE DE COMPTE',
    subProcedures: [
      {
        name: 'ANNULATION PROCURATION SUR COMPTE ET AUTORISATION DE PRELEVEMENT',
        link: `${PATH_MODULE}/ANNULATION PROCURATION SUR COMPTE ET AUTORISATION DE PRELEVEMENT.pdf`,
      },
      {
        name: 'ANNULATION-RESILIATION AUTORISATION-DECOUVERT',
        link: `${PATH_MODULE}/ANNULATION-RESILIATION AUTORISATION-DECOUVERT.pdf`,
      },
      {
        name: 'MODIFICATION_SUPPRESSION AUTORISATION DE PRELEVEMENT',
        link: `${PATH_MODULE}/MODIFICATION_SUPPRESSION AUTORISATION DE PRELEVEMENT.pdf`,
      },
      {
        name: 'PROCEDURE DE LEVEE DE GARANTIE AVANT ECHEANCE',
        link: `${PATH_MODULE}/PROCEDURE DE LEVEE DE GARANTIE AVANT ECHEANCE.pdf`,
      },
      {
        name: 'PROCEDURE DE RESOLUTION DES ANOMALIES DE RESILIATION DU PACK STARTER',
        link: `${PATH_MODULE}/PROCEDURE DE RESOLUTION DES ANOMALIES DE RESILIATION DU PACK STARTER.pdf`,
      },
      {
        name: 'PROCEDURE DE SUPPRESSION BENEFICIAIRE EFFECTIF',
        link: `${PATH_MODULE}/PROCEDURE DE SUPPRESSION BENEFICIAIRE EFFECTIF.pdf`,
      },
      {
        name: 'Produit resilies par le programme cbvente',
        link: `${PATH_MODULE}/Produit resilies par le programme cbvente.pdf`,
      },
      {
        name: 'RESILIATION CONTRAT MOBILIZE',
        link: `${PATH_MODULE}/RESILIATION CONTRAT MOBILIZE.pdf`,
      },
      {
        name: 'RESILIATION DES PRODUITS ET PACKAGES',
        link: `${PATH_MODULE}/RESILIATION DES PRODUITS ET PACKAGES.pdf`,
      },
      {
        name: 'RESILIATION_SUPPRESSION VOCALIA',
        link: `${PATH_MODULE}/RESILIATION_SUPPRESSION VOCALIA.pdf`,
      },
      {
        name: 'SUPPRESSION DES PRODUITS ET PACKAGE DU CLIENT 500424735 POUR CLOTURE COMPTE 099422397',
        link: `${PATH_MODULE}/SUPPRESSION DES PRODUITS ET PACKAGE DU CLIENT 500424735 POUR CLOTURE COMPTE 099422397.pdf`,
      },
      {
        name: 'Suppression des produits et packages avant cloture du compte',
        link: `${PATH_MODULE}/Suppression des produits et packages avant cloture du compte.pdf`,
      },
      {
        name: 'SUPPRESSION DES SOUSCRIPTIONS IBE',
        link: `${PATH_MODULE}/SUPPRESSION DES SOUSCRIPTIONS IBE.pdf`,
      },
    ],
  },
  // CREATION CODE AGENCE
  { title: 'CREATION CODE AGENCE', subProcedures: [] },
  // CREATION CODE OPERATION
  { title: 'CREATION CODE OPERATION', subProcedures: [] },
  // CREATION UTILISATEUR
  { title: 'CREATION UTILISATEUR', subProcedures: [] },
  // GESTION DES CONDITIONS
  { title: 'GESTION DES CONDITIONS', subProcedures: [] },
];

// ----------------------------------------------------------------------

export const _referentials = [...Array(_procedures.length)].map((_, index) => ({
  id: _mock.id(index),
  title: _procedures[index].title,
}));

// ----------------------------------------------------------------------

export const getReferential = (referentialName) =>
  _procedures.find((referential) => referential.title.toLowerCase() === referentialName.toLowerCase());
