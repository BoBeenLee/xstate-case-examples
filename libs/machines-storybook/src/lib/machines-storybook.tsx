import styles from './machines-storybook.module.css';

/* eslint-disable-next-line */
export interface MachinesStorybookProps {}

export function MachinesStorybook(props: MachinesStorybookProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MachinesStorybook!</h1>
    </div>
  );
}

export default MachinesStorybook;
